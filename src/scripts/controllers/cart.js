import cartTpl from "../views/cart.html";
import cart from "../models/cart";

const render = ()=>{
    $(".main").html(cartTpl);
    allSelect();
    singleSelect();
    operateNum();
}

//商品渲染?


// 全选
const allSelect = ()=>{
    $(".all-Select").on("tap",function(){
        if($(this).attr("select") == "true"){//全都不选中
            $(this).removeClass("active").attr("select",false);
            $(".single-Select").removeClass("active").attr("select",false);
            $(".total-price").text("0.00");
            $(".has-selected button").removeClass("ok-select");

        }else{//全部选中
            $(this).addClass("active").attr("select",true);
            $(".single-Select").addClass("active").attr("select",true);
            var totalPrice = 0;;
            $(".single-Select").each(function(i){
                var price = Number($(this).next().children().eq(1).text().slice(1));
                var numVal = Number($(this).next().next().children().eq(1).text());
                totalPrice += price*numVal;
            })
            totalPrice = totalPrice.toFixed(2);//保留2位小数
            $(".total-price").text("￥"+totalPrice);
            $(".has-selected button").addClass("ok-select");
        }
    })
}

//反选
const singleSelect = ()=>{
    $(".single-Select").on("tap",function(){
        if($(this).attr("select") == "true"){
            $(this).removeClass("active").attr("select",false);
            $(".all-Select").removeClass("active").attr("select",false);
            //取消选中时，改变总价格
            var price = Number($(this).next().children().eq(1).text().slice(1));
            var numVal = Number($(this).next().next().children().eq(1).text());
            var totalPrice = Number($(".total-price").text().slice(1));
            totalPrice -= price*numVal;
            totalPrice = totalPrice.toFixed(2);
            $(".total-price").text("￥"+totalPrice);
            //设置选好了的样式
            let flag = true;
            $(".single-Select").each(function(i){
                if($(this).attr("select") == "true"){
                    flag = false;
                }
            })
            if(flag){
                $(".has-selected button").removeClass("ok-select");
            }
        }else{
            $(this).addClass("active").attr("select",true);
            let flag = true;
            //通过反选来控制全选按钮
            $(".single-Select").each(function(i){
                if($(this).attr("select") != "true"){
                    flag = false;
                }
            })
            if(flag){
                $(".all-Select").addClass("active").attr("select",true);
            }
            //选中状态下,改变总价格
            var price = Number($(this).next().children().eq(1).text().slice(1));
            var numVal = Number($(this).next().next().children().eq(1).text());
            var totalPrice = Number($(".total-price").text().slice(1));
            totalPrice += price*numVal;
            totalPrice = totalPrice.toFixed(2);
            $(".total-price").text("￥"+totalPrice);
            $(".has-selected button").addClass("ok-select");
        }
    })
}

// 商品加减
const operateNum = ()=>{
    $(".sub").on("tap",function(){
        var numEl = $(this).next();
        var numVal = Number($(this).next().text());
        if(numVal<=1){
            // 当前数量为1提示是否要进行删除?
            // var a = layer.open({
            //     title: '添加提示',
            //     content: "成功添加商品"
            // });
            // console.log(a);
            // if(localStorage.length<=1){
            //     $(".pro-list").css("display","none");
            //     $(".has-selected").css("display","none");
            //     $(".no-product").css("display","flex");
            // }
        }else{
            numVal--;
            numEl.text(numVal);
            //选中状态下数量加减还要对总价进行相应改变
            if($(this).parent().prev().prev().attr("select") == "true"){
                var price = Number($(this).parent().prev().children().eq(1).text().slice(1));
                var totalPrice = Number($(".total-price").text().slice(1));
                totalPrice -= price;
                totalPrice = totalPrice.toFixed(2);
                $(".total-price").text("￥"+totalPrice);
            }
            //对应的商品数量在localstorage里还进行减操作?
            // var id = $(this).next().attr("data-id");
            // localStorage[id] = --Number(localStorage[id]);
        }
        
    })
    $(".add").on("tap",function(){
        var numEl = $(this).prev();
        var numVal = Number($(this).prev().text());
        numVal++;
        numEl.text(numVal);
        //选中状态下数量加减还要对总价进行相应改变
        if($(this).parent().prev().prev().attr("select") == "true"){
            var price = Number($(this).parent().prev().children().eq(1).text().slice(1));
            var totalPrice = Number($(".total-price").text().slice(1));
            totalPrice += price;
            totalPrice = totalPrice.toFixed(2);
            $(".total-price").text("￥"+totalPrice);
        }
        //对应的商品数量在localstorage里还进行加操作?
        // var id = $(this).next().attr("data-id");
        // localStorage[id] = ++Number(localStorage[id]);
    })
}

export default {
    render
}