"use strict";
// npm和node版本检查，请看我的check-versions配置文件解释文章

require("./check-versions")();
// 设置环境变量为production
process.env.NODE_ENV = "production";
// ora是一个命令行转圈圈动画插件，好看用的

const ora = require("ora");
// rimraf插件是用来执行UNIX命令rm和-rf的用来删除文件夹和文件，清空旧的文件
const rm = require("rimraf");

// node.js路径模块
const path = require("path");
// chalk插件，用来在命令行中输入不同颜色的文字

const chalk = require("chalk");
// 引入webpack模块使用内置插件和webpack方法

const webpack = require("webpack");
// 引入config下的index.js配置文件，此配置文件我之前介绍了请自行查阅，主要配置的是一些通用的选项

const config = require("../config");
// 下面是生产模式的webpack配置文

const webpackConfig = require("./webpack.prod.conf");

const spinner = ora("building for production...");
spinner.start();

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err;
  webpack(webpackConfig, (err, stats) => {
    spinner.stop();
    if (err) throw err;
    process.stdout.write(
      stats.toString({
        colors: true,
        modules: false,
        children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
        chunks: false,
        chunkModules: false
      }) + "\n\n"
    );

    if (stats.hasErrors()) {
      console.log(chalk.red("  Build failed with errors.\n"));
      process.exit(1);
    }

    console.log(chalk.cyan("  Build complete.\n"));
    console.log(
      chalk.yellow(
        "  Tip: built files are meant to be served over an HTTP server.\n" +
          "  Opening index.html over file:// won't work.\n"
      )
    );
  });
});
