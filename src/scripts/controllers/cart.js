import cartTpl from "../views/cart.html";
import cartModel from "../models/cart";

const render = async() => {
    $(".main").html(cartTpl);
    await renderList();
    allSelect();
    singleSelect();
    operateNum();
    buyNow();
}

//商品渲染
const renderList = async() => {
    var data = await cartModel.render();
    console.log(data);
    var str = "";
    var str1 = $(".pro-list").html();
    for (var i = 0; i < data.length; i++) {
        for (var key in localStorage) {
            var arr = key.split("");
            var key1 = arr[arr.length-1];
            if (data[i].id == key1) {
                str += `<div class="product">
                        <span class="single-Select"><i class="iconfont">&#xe671;</i></span>
                        <div>
                            <p class="des">${data[i].name}</p>
                            <b class="price">${"￥"+data[i].addPrice/100}</b>
                        </div>
                        <div>
                            <button class="sub">-</button>
                            <span class="operate-num" data-id="${key}">${localStorage[key]}</span>
                            <button class="add">+</button>
                        </div>
                    </div>`
            }
        }
    }
    $(".pro-list").html(str1 + str);
    //如果首次进入购物车没数据，则应该隐藏掉
    if ($(".product").length <= 0 || localStorage.length < 1) {
        $(".pro-list").css("display", "none");
        $(".has-selected").css("display", "none");
        $(".no-product").css("display", "flex");
    }
}

// 全选
const allSelect = () => {
    $(".all-Select").on("tap", function() {
        if ($(this).attr("select") == "true") { //全都不选中
            $(this).removeClass("active").attr("select", false);
            $(".single-Select").removeClass("active").attr("select", false);
            $(".total-price").text("0.00");
            $(".has-selected button").removeClass("ok-select");

        } else { //全部选中
            $(this).addClass("active").attr("select", true);
            $(".single-Select").addClass("active").attr("select", true);
            var totalPrice = 0;;
            $(".single-Select").each(function(i) {
                var price = Number($(this).next().children().eq(1).text().slice(1));
                var numVal = Number($(this).next().next().children().eq(1).text());
                totalPrice += price * numVal;
            })
            totalPrice = totalPrice.toFixed(2); //保留2位小数
            $(".total-price").text("￥" + totalPrice);
            $(".has-selected button").addClass("ok-select");
        }
    })
}

//反选
const singleSelect = () => {
    $(".single-Select").on("tap", function() {
        if ($(this).attr("select") == "true") {
            $(this).removeClass("active").attr("select", false);
            $(".all-Select").removeClass("active").attr("select", false);
            //取消选中时，改变总价格
            var price = Number($(this).next().children().eq(1).text().slice(1));
            var numVal = Number($(this).next().next().children().eq(1).text());
            var totalPrice = Number($(".total-price").text().slice(1));
            totalPrice -= price * numVal;
            totalPrice = totalPrice.toFixed(2);
            $(".total-price").text("￥" + totalPrice);
            //设置选好了的样式
            let flag = true;
            $(".single-Select").each(function(i) {
                if ($(this).attr("select") == "true") {
                    flag = false;
                }
            })
            if (flag) {
                $(".has-selected button").removeClass("ok-select");
            }
        } else {
            $(this).addClass("active").attr("select", true);
            let flag = true;
            //通过反选来控制全选按钮
            $(".single-Select").each(function(i) {
                if ($(this).attr("select") != "true") {
                    flag = false;
                }
            })
            if (flag) {
                $(".all-Select").addClass("active").attr("select", true);
            }
            //选中状态下,改变总价格
            var price = Number($(this).next().children().eq(1).text().slice(1));
            var numVal = Number($(this).next().next().children().eq(1).text());
            var totalPrice = Number($(".total-price").text().slice(1));
            totalPrice += price * numVal;
            totalPrice = totalPrice.toFixed(2);
            $(".total-price").text("￥" + totalPrice);
            $(".has-selected button").addClass("ok-select");
        }
    })
}

// 商品加减
const operateNum = () => {
    $(".sub").on("tap", function() {
        var numEl = $(this).next();
        var numVal = Number($(this).next().text());
        var _this = $(this);
        var id = $(this).next().attr("data-id");
        console.log(id);

        if (numVal <= 1) {
            layer.open({
                content: "是否删除该商品?",
                btn: ['删除', '取消'], //按钮
                btn1: function() {
                    layer.msg('删除成功', {
                        time: "500"
                    });
                    localStorage.removeItem(id);
                    _this.parent().parent().remove();
                    // 如果选中状态下删除还有进行总价加减
                    if (_this.parent().prev().prev().attr("select") == "true") {
                        var price = Number(_this.parent().prev().children().eq(1).text().slice(1));
                        var totalPrice = Number($(".total-price").text().slice(1));
                        totalPrice -= price;
                        totalPrice = totalPrice.toFixed(2);
                        $(".total-price").text("￥" + totalPrice);
                    }
                    if ($(".product").length <= 0 || localStorage.length < 1) {
                        $(".pro-list").css("display", "none");
                        $(".has-selected").css("display", "none");
                        $(".no-product").css("display", "flex");
                    }

                }
            });

        } else {
            numVal--;
            numEl.text(numVal);
            //选中状态下数量加减还要对总价进行相应改变
            if ($(this).parent().prev().prev().attr("select") == "true") {
                var price = Number($(this).parent().prev().children().eq(1).text().slice(1));
                var totalPrice = Number($(".total-price").text().slice(1));
                totalPrice -= price;
                totalPrice = totalPrice.toFixed(2);
                $(".total-price").text("￥" + totalPrice);
            }
            //对应的商品数量在localstorage里还进行减操作
            // 在数量元素上存入商品的ID
            var id = $(this).next().attr("data-id");
            var l_num = Number(localStorage[id]);
            l_num--;
            localStorage[id] = l_num;
        }

    })
    $(".add").on("tap", function() {
        var numEl = $(this).prev();
        var numVal = Number($(this).prev().text());
        numVal++;
        numEl.text(numVal);
        //选中状态下数量加减还要对总价进行相应改变
        if ($(this).parent().prev().prev().attr("select") == "true") {
            var price = Number($(this).parent().prev().children().eq(1).text().slice(1));
            var totalPrice = Number($(".total-price").text().slice(1));
            totalPrice += price;
            totalPrice = totalPrice.toFixed(2);
            $(".total-price").text("￥" + totalPrice);
        }
        //对应的商品数量在localstorage里还进行加操作?
        var id = $(this).prev().attr("data-id");
        var l_num = Number(localStorage[id]);
        l_num++;
        localStorage[id] = l_num;
    })
}

const buyNow = () => {
    $(".nowBuy").on("tap", function() {
        location.hash = "#main";
    })
}

export default {
    render
}