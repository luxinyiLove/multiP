import searchConTpl from "../views/searchCon.html";
import searchList from "../models/search";
import searchL from "../views/search-list.html";


const render = () => {
    $(".main").html(searchConTpl);
    const nav = $(".nav");
    nav.css("display", "none");
    list();
    ret();

}

const list = async () => {

    let listSource = (await searchList.list()).list;
    renderList(listSource);
}




const renderList = async (list) => {

    let template = Handlebars.compile(searchL)
    let html = template({
        list
    })
    $('#search_list').html(html)
    addClick();
}

// 点击商品添加

const addClick = function () {
    const search_li = $("#search_list").find("li");

    const search_list = $("#search_list li .add_pro");

    search_li.on("tap", function (e) {
        var target = $(e.target);

        search_li.on("tap", function (e) {
            var target = $(e.target);
            if (target.attr("class") == "add_pro") {
                if (localStorage.length > 0) {
                    for (var i = 0; i < localStorage.length; i++) {
                        var bStop = false;
                        var key = localStorage.key(i);
                        if (key == target.parent().parent().attr("data-id")) {
                            var value = localStorage[key];
                            value++;
                            localStorage.setItem(key, value);
                            bStop = true;
                            break;
                        }
                    }
                    if (!bStop) {
                        localStorage.setItem(target.parent().parent().attr("data-id"), 1);
                    }

                } else {
                    localStorage.setItem(target.parent().parent().attr("data-id"), 1);
                }
            }
        })
    })



}
// 点击返回键  返回

const ret = () => {
    $('.ret').on("tap", () => {
        location.hash = "#search";
    })
}

export default {
    render
}