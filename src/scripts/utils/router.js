function Router(){
    //定义一个对象存储路由值和对应的回调函数
    this.routes = {};
    this.currentHash = "";
}

//默认的回调函数
var noop = function(){};

//路由注册
Router.prototype.route = function(hash,cb){
    this.currentHash = hash;
    this.routes[this.currentHash] = cb || noop;
}

//路由刷新
Router.prototype.refresh = function(){
    let hash = location.hash || "#main";
    this.currentHash = hash;
    this.routes[this.currentHash]();
    this.switchTabbar();
}

//switchTabbar
Router.prototype.switchTabbar = function(){
    let hashs = ["#main","#classify","#member","#cart","#mine"];
    let index = hashs.indexOf(this.currentHash);
    $(".nav>li").eq(index).addClass("active").siblings().removeClass("active");
}

//路由切换监听
Router.prototype.init = function(){
    window.addEventListener("load",this.refresh.bind(this));
    window.addEventListener("hashchange",this.refresh.bind(this));
}

export default Router