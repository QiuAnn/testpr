const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  outputDir: "dist",
  assetsDir: "static",
  publicPath: "./",
  productionSourceMap: false,
  pages: {
    index: {
      entry: "src/main.js",
      title: "Gitee 八周年：协作创造无限可能",
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"));
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
      config.mode = "production";
      config["performance"] = {
        //打包文件大小配置
        maxEntrypointSize: 10000000,
        maxAssetSize: 30000000,
      };
    }
  },
  devServer: {
    open: true,
    hotOnly: true, // 热更新
    //disableHostCheck:true,
    //changeOrigin: true,
    // proxy: {
    //   ['/weixin']: {
    //     target: 'https://gitee.com',
    //     changeOrigin: true
    //   }
    // }
  },
};
