import mainTpl from "../views/main.html";
const render = ()=>{
    $(".main").html(mainTpl);
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


export default {
    render
}