import addressModel from "../models/location";
import locationTpl from "../views/location-city.html";

const render = async ()=>{
    $(".back-main").on("tap",function(){
        location.hash = "#main";
    })
    var data = (await addressModel.address()).data.cityList;
    let template = Handlebars.compile(locationTpl);
    let html = template({data});
    $(".select").html(html);
}

export default {
    render
}