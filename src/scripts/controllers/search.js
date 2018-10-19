
import searchTpl from "../views/search.html";
import searchConTpl from '../views/searchCon.html';
const render =  ()=>{
    $(".main").html(searchTpl);
    const nav = $(".nav");
    nav.css("display","none");
    addProduct();
    history_s();
    ret();
}

// 判断keycode = enter跳转到searchCon内容

$(document).on("keypress",(e)=>{
    var keyCode = e.which;
    var input = $(".search_t>input");
   if(keyCode == 13){
       var value = input.val();
        if(value != ""){
            location.hash = "#searchCon";
            $(".main .search_c").html("");
            $(".main .search_b").html("");
            localStorage.setItem(value,value);
        }
       
   }
})

// 历史搜索添加内容

const addProduct = ()=>{
    var search_list =   $(".search_list");
  var str = "";
    for(var i = 0;i<localStorage.length;i++){
        var key = localStorage.key(i);
        str +=`<li>${localStorage[key]}</li>`;
    }
    search_list.html(str);
}

//  点击历史搜索和热门搜索内容的时候

const history_s = ()=>{
    var search_list =   $(".search_list");
    var hot_list = $(".hot_list");

    var li_hos = search_list.find("li");
    var li_hot = hot_list.find("li");
    var input = $(".search_t>input");
    li_hos.on("tap",function(){
        $(".main").html(searchConTpl);
        // $(".main .search_b").html("");
        // input.val($(this).text())
        // input.val(li_hos.eq($(this).index().val()));
        location.hash = "#searchCon";
    })
    li_hot.on("tap",function(){
        // $(".main .search_c").html("");
        // $(".main .search_b").html("");
        $(".main").html(searchConTpl);
        // input.val($(this).text())
        // input.val(li_hos.eq($(this).index().val()));
        location.hash = "#searchCon";
    })
}

// 点击返回键返回
const ret = ()=>{
    $(".ret").on("tap",()=>{
        location.hash = "#main";
        const nav = $(".nav");
        nav.css("display","block");
    })
}
export default {
    render
}