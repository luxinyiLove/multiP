import searchConTpl from "../views/searchCon.html";
import searchList from "../models/search";
import searchL from "../views/search-list.html";


const render = ()=>{
    $(".main").html(searchConTpl);
    const nav = $(".nav");
    nav.css("display","none");
    list();
    ret();
}

const list = async () => {
   
    let listSource  = (await searchList.list()).list;
    console.log(listSource)
   renderList(listSource);
  }




 const renderList = async (list) => {

    let template = Handlebars.compile(searchL)
    let html = template({ list })
    $('#search_list').html(html)
  }
  
// 点击返回键  返回

const ret = ()=>{
    $('.ret').on("tap",()=>{
      location.hash = "#search";
    })
}

export  default{
    render
}