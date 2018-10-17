﻿const gulp = require("gulp");
const server = require("gulp-webserver");
const sass = require("gulp-sass");
const webpack = require("webpack-stream");
const watch = require("gulp-watch");
const proxy = require("http-proxy-middleware");

//CommonJS规范左JS模块化
gulp.task("packJs", () => {
    return gulp.src("./src/scripts/**/*.js")
        .pipe(webpack({
            mode: "development",
            entry: "./src/scripts/app.js",
            output: {
                filename: "app.js"
            },
            //loader来识别和加载HTML文件，可以通过loader来解析非js文件
            module: {
                rules: [{
                    test: /\.html$/,
                    //最新版本的webpack将loader替换成了use
                    use: ["string-loader"]
                }]
            }
        }))
        .pipe(gulp.dest("./dev/scripts"));
})

//编译sass
gulp.task("packScss", () => {
    return gulp.src("./src/styles/app.scss")
        //编译sass错误时进行打印
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./dev/styles"));
})

// 启动一个web-server
gulp.task("server", () => {
    return gulp.src("./dev")
        .pipe(server({
            host: "localhost",
            port: 8080,
            livereload: true,
            middleware: [
                    proxy("/business", {
                        target: "https://wxcmsapi.dmall.com/weixin/home",
                        changeOrigin: true
                            // pathRewrite:{
                            // 	"^/api":""//将api置为空，虽然访问到/api时，就指定代理地址，但目标地址，并没有/api这个路由
                            // 	//所以需要去掉，如果目标地址带有/api路由，则不需要将它置为空
                            // }
                    }),
                    proxy("/businessIndex", {
                        target: "https://wxcmsapi.dmall.com/weixin/home",
                        changeOrigin: true
                    }),
                    // 会员分享的接口
                    proxy("/user", {
                        target: "https://gatewx.dmall.com",
                        changeOrigin: true
                    }),
                    //会员分享下的图片列表
                    proxy("/i/pageData", {
                        target: " https://a.dmall.com",
                        changeOrigin: true
                    }),
                    proxy("/address", {
                        target: "https://gatewx.dmall.com",
                        changeOrigin: true
                    }),
                    proxy('/api', {
                        target: 'http://localhost:3000',
                        changeOrigin: true,
                        pathRewrite: {
                            "^/api": ""
                        }
                    })
                    //Request URL: https://a.dmall.com/i/pageData?dshopStoreId=11491&actId=816&pageId=2330&token=83EB7F557CCF2635BB848552649E4DC9BF53CAC004E68C19B05722A1C4AA92F8177688A76B545E42B879004E4542F08F595A6DE9E36F8970AEEAE1FE4D2BDF92EEEB8AE7D81884C5F4FC70882CCD6ED5E241327666682DE04BD75E3AA1C60DDCDA0B1386915EAC1D525428531C293778A73BF32390D526B249F6E702FDC128D7&source=2&tempid=C82C1A2BD75000028C44114FC3801807&_=1539497626339
                ]
                // https://gatewx.dmall.com/user/memberTab?token=83EB7F557CCF2635BB848552649E4DC9BF53CAC004E68C19B05722A1C4AA92F8177688A76B545E42B879004E4542F08F595A6DE9E36F8970AEEAE1FE4D2BDF92EEEB8AE7D81884C5F4FC70882CCD6ED5E241327666682DE04BD75E3AA1C60DDCDA0B1386915EAC1D525428531C293778A73BF32390D526B249F6E702FDC128D7&
                // source=2&tempid=C82C1A2BD75000028C44114FC3801807&_=1539499165097
        }));
})


//拷贝HTML文件
gulp.task("copyHtml", () => {
    return gulp.src("./src/*.html")
        .pipe(gulp.dest("./dev"));
})

// 拷贝iconfonts
gulp.task("copyIconfont", () => {
    return gulp.src("./src/iconfonts/**/*")
        .pipe(gulp.dest("./dev/iconfonts"));
})

// 拷贝libs
gulp.task("copyLibs", () => {
    return gulp.src("./src/libs/**/*")
        .pipe(gulp.dest("./dev/libs"));
})

//拷贝mock数据
gulp.task("copyMock", () => {
    return gulp.src("./src/mock/**/*")
        .pipe(gulp.dest("./dev/mock"));
})

// 拷贝图片
gulp.task("copyImages", () => {
    return gulp.src("./src/images/**/*")
        .pipe(gulp.dest("./dev/images"));
})

//文件修改的监听
gulp.task("watch", () => {
    //自带的gulp.watch不能对文件的创建和删除操作进行监听
    gulp.watch("./src/*.html", ["copyHtml"]);
    gulp.watch("./src/scripts/**/*", ["packJs"]);
    gulp.watch("./src/styles/**/*.scss", ["packScss"]);
    //gulp-watch可以监听到文件的修改和删除,但Windows系统不支持,mac支持
    // watch("./src/style/**/*",()=>{
    // 	gulp.start(["packScss"])
    // });
    gulp.watch("./src/libs/**/*", ["copyLibs"]);
    gulp.watch("./src/images/**/*", ["copyImages"]);
})

//默认任务，即直接输入gulp后，会执行的任务
gulp.task("default", ["packScss", "packJs", "copyHtml", "copyImages", "copyIconfont", "copyLibs", "server", "watch"], () => {
    console.log("successful");
})
