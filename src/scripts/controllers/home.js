import homeTpl from "../views/home.html";

const render = () =>{
    document.getElementById("root").innerHTML = homeTpl;
    changeTab();
}

//点击切换
const changeTab = ()=>{
    $(".nav>li").on("tap",function(){
        let hashs = ["#home","#classify","#member","#cart","#mine"];
        // 点击到不同的按钮时，将哈希值进行相应的赋值
        location.hash = hashs[$(this).index()];
        $(this).addClass('active').siblings().removeClass("active");
    })
}
export default{
    render
}
