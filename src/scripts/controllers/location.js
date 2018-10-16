// import locationTpl from "../views/location.html";
import addressModel from "../models/location";
import locationTpl from "../views/location-city.html";

const render = async ()=>{
    // $(".home-container").css("display","none");
    // $(".locate").html(locationTpl).css("display","flex");
    // console.log($(".home-container"));
    $(".back-main").on("tap",function(){
        location.hash = "#main";
    })
    var data = (await addressModel.address()).data.cityList;
    // let template = Handlebars.compile(mainMarketTpl);
    //     let html = template({data});
    //     $(".market-list").html(html);
    let template = Handlebars.compile(locationTpl);
    let html = template({data});
    $(".select").html(html);
}

export default {
    render
}