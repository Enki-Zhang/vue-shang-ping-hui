module.exports = {
  // 预设配置
  presets: [
    ["@vue/cli-plugin-babel/preset"],
    ["@babel/preset-env", { modules: false }],
  ],
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk",
      },
    ],
  ],
};
