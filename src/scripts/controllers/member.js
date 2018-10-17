import memberTpl from "../views/member.html";
import memberShareTpl from "../views/membe_share_menu.html";
import memberImgTpl from "../views/membe_share_imgList.html";
import memberShareModel from "../models/member.js";

const render = () => {
    $(".main").html(memberTpl);
    memberShare();
    imgList();
}
const imgList = async() => {
    var result = await memberShareModel.renderDate();
    var imgList = result.data.renderData;
    var imgObj = JSON.parse(imgList).moduleList;

    var list = "";

    for (var i = 0; i < imgObj.length; i++) {
        list = [...list, imgObj[i].data];
    }
    console.log(list);
    let template = Handlebars.compile(memberImgTpl);
    let html = template({ list });
    console.log(html)
    $(".img_area").html(html)

}

const memberShare = async() => {
    //获取数据
    var result = await memberShareModel.welfares_list();
    var result_list = result.data.welfares;

    let template = Handlebars.compile(memberShareTpl);
    result_list.length = 5;
    let html = template({ list: result_list });
    $(".share").html(html);

}

export default {
    render
}