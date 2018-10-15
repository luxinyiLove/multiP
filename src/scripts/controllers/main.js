import mainTpl from "../views/main.html";
import mainModel from "../models/main";
import main from "../models/main";
import mainListTpl from "../views/main-menu.html";
import mainMarketTpl from "../views/main-market.html"
import locationTpl from "../views/location.html";

const render =  ()=>{
    $(".main").html(mainTpl);
    banner();
    change_title();
    menu();
    // promotion();
    theme();
    market();
}

//超市优选
const market = async ()=>{
    //9+10
    var result = (await mainModel.totalData()).data.pageModules[9].dataList;
    $(".supermarket>img").attr("src",result[0].imageUrl);
    var data = "";
    for(var i=10; i<=12; i++){
        data = [...data,...(await mainModel.totalData()).data.pageModules[i].dataList];
        let template = Handlebars.compile(mainMarketTpl);
        let html = template({data});
        $(".market-list").html(html);
    }
    
}

//主题乐园
const theme = async ()=>{
    var data1 =  (await mainModel.totalData()).data.pageModules[6].dataList;
    var data2 =  (await mainModel.totalData()).data.pageModules[7].dataList;
    $(".theme>img").attr("src",data1[0].imageUrl);
    // console.log($(".theme-img img"))
    $(".theme-img>a>img").attr("src",data2[0].imageUrl).parent().attr("href",data2[0].resource);
    $(".theme-img>div>a>img").each(function(i){
        $(this).attr("src",data2[i+1].imageUrl).parent().attr("href",data2[i+1].resource);
    })
}

// 大促
// const promotion = async ()=>{
//     var data = (await mainModel.totalData()).data.pageModules[6].dataList;
//     $(".promotion img").each(function(i){
//         $(this).attr("src",data[i].imageUrl).parent().attr("href",data[i].resource);
//     })
// }

//功能菜单区
const menu = async ()=>{
    var data = "";
    for(var i=2; i<=3; i++){
        data = [...data,...(await mainModel.totalData()).data.pageModules[i].dataList]
        let template = Handlebars.compile(mainListTpl);
        let html = template({data});
        $(".menu").html(html);
    }
}

//轮播图渲染
const banner = async ()=>{
    var result = await mainModel.banner_title();
    $(".banner-title img:first").attr("src",result.data[0].business[0].label);
    $(".banner-title img:last").attr("src",result.data[0].business[1].label);
    $(".banner-title span:first").text(result.data[0].business[0].name);
    $(".banner-title span:last").text(result.data[0].business[1].name);
    //图片及对应的超链接设置
    var data = (await mainModel.totalData()).data.pageModules[0].dataList;
    $(".swiper-wrapper img").each(function(i){
        $(this).attr("src",data[i].imageUrl).parent().attr("href",data[i].resource);
    })
    // 定义swiper
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay: true,
        autoplay:{
            disableOnInteraction: false
        },
        // 如果需要分页器
        pagination: {
        el: '.swiper-pagination',
        clickable :true,
        },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
        },
    })
}

//切换轮播图上的标题
const change_title = ()=>{
    $(".banner-title div").on("tap",function(){
        $(this).addClass("active").siblings().removeClass("active");
    })
    $(".location").on("tap",function(){
        $(".home-container").css("display","none");
        $(".locate").html(locationTpl).css("display","flex");
        location.hash = "#location";
    })
}

export default {
    render
}