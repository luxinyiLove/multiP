
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
var goods = {};
var arr = [];
$(document).on("keypress",(e)=>{
    var keyCode = e.which;
    var input = $(".search_t>input");
   if(keyCode == 13){
       var value = input.val();
        if(value != ""){
            location.hash = "#searchCon";
            $(".main .search_c").html("");
            $(".main .search_b").html("");
            goods.id = value;
            goods.value = value;
            if(localStorage.length>0){
                for(var i = 0;i<localStorage.length;i++){
                    var   key = localStorage.key(i);
                       if(key == "search"){
                        arr = JSON.parse(localStorage[key]);
                        var bStop = false;
                           for(var j = 0;j<arr.length;j++){
                                if(arr[j].id == value){
                                   
                                }else{
                                  
                                }
                           } 
                       }else{
                            arr.push(goods);
                            localStorage.setItem("search",JSON.stringify(arr));
                            break;
                       }
                   }
            }else{
                arr.push(goods);
                localStorage.setItem("search",JSON.stringify(arr));
            }
          
           
        }
       
   }
})

// 历史搜索添加内容

const addProduct = ()=>{
    var search_list =   $(".search_list");
  var str = "";
    for(var i = 0;i<localStorage.length;i++){
        var key = localStorage.key(i);
      
        if(key == "search"){
          
         var value =JSON.parse( localStorage[key]);
    
            for(var j = 0;j<value.length;j++){
                str +=`<li>${value[j].value}</li>`;
            }
        }
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
        localStorage.setItem($(this).text(),$(this).text());
        location.hash = "#searchCon";
    })
    li_hot.on("tap",function(){
        $(".main").html(searchConTpl);
            var value = $(this).text();
            goods.id = value;
            goods.value = value;
            if(localStorage.length>0){
                for(var i = 0;i<localStorage.length;i++){
                    var   key = localStorage.key(i);
                       if(key == "search"){
                        arr = JSON.parse(localStorage[key]);
                        var bStop = false;
                           for(var j = 0;j<arr.length;j++){
                                if(arr[j].id == value){
                                   
                                }else{
                                  
                                }
                           } 
                       }else{
                            arr.push(goods);
                            localStorage.setItem("search",JSON.stringify(arr));
                            break;
                       }
                   }
            }else{
                arr.push(goods);
                localStorage.setItem("search",JSON.stringify(arr));
            }
          
          
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