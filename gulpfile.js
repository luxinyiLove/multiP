
const gulp = require("gulp");
const server = require("gulp-webserver");
const sass = require("gulp-sass");
const webpack = require("webpack-stream");
const watch = require("gulp-watch");
const proxy = require("http-proxy-middleware");

//CommonJS规范左JS模块化
gulp.task("packJs",()=>{
	return gulp.src("./src/scripts/**/*.js")
		.pipe(webpack({
			mode:"development",
			entry:"./src/scripts/app.js",
			output:{
				filename:"app.js"
			},
			//loader来识别和加载HTML文件，可以通过loader来解析非js文件
			module:{
				rules:[{
					test:/\.html$/,
					//最新版本的webpack将loader替换成了use
					use:["string-loader"]
				}]
			}
		}))
		.pipe(gulp.dest("./dev/scripts"));
})

//编译sass
gulp.task("packScss",()=>{
	return gulp.src("./src/styles/app.scss")
		//编译sass错误时进行打印
		.pipe(sass().on("error",sass.logError))
		.pipe(gulp.dest("./dev/styles"));
})

// 启动一个web-server
gulp.task("server",()=>{
	return gulp.src("./dev")
		.pipe(server({
			host:"localhost",
			port:8080,
			livereload:true,
			middleware:[
				proxy("/business",{
					target:"https://wxcmsapi.dmall.com/weixin/home",
					changeOrigin:true
					// pathRewrite:{
					// 	"^/api":""//将api置为空，虽然访问到/api时，就指定代理地址，但目标地址，并没有/api这个路由
					// 	//所以需要去掉，如果目标地址带有/api路由，则不需要将它置为空
					// }
				}),
				proxy("/businessIndex",{
					target:"https://wxcmsapi.dmall.com/weixin/home",
					changeOrigin:true
				})
			]
		}));
})


//拷贝HTML文件
gulp.task("copyHtml",()=>{
	return gulp.src("./src/*.html")
		.pipe(gulp.dest("./dev"));
})

// 拷贝iconfonts
gulp.task("copyIconfont",()=>{
	return gulp.src("./src/iconfonts/**/*")
		.pipe(gulp.dest("./dev/iconfonts"));
})

// 拷贝libs
gulp.task("copyLibs",()=>{
	return gulp.src("./src/libs/**/*")
		.pipe(gulp.dest("./dev/libs"));
})

//拷贝mock数据
gulp.task("copyMock",()=>{
	return gulp.src("./src/mock/**/*")
		.pipe(gulp.dest("./dev/mock"));
})

// 拷贝图片
gulp.task("copyImages",()=>{
	return gulp.src("./src/images/**/*")
		.pipe(gulp.dest("./dev/images"));
})

//文件修改的监听
gulp.task("watch",()=>{
	//自带的gulp.watch不能对文件的创建和删除操作进行监听
	gulp.watch("./src/*.html",["copyHtml"]);
	gulp.watch("./src/scripts/**/*",["packJs"]);
	gulp.watch("./src/styles/**/*.scss",["packScss"]);
	//gulp-watch可以监听到文件的修改和删除,但Windows系统不支持,mac支持
	// watch("./src/style/**/*",()=>{
	// 	gulp.start(["packScss"])
	// });
	gulp.watch("./src/libs/**/*",["copyLibs"]);
	gulp.watch("./src/images/**/*",["copyImages"]);
})

//默认任务，即直接输入gulp后，会执行的任务
gulp.task("default",["packScss","packJs","copyHtml","copyImages","copyIconfont","copyLibs","server","watch"],()=>{
	console.log("successful");
})
