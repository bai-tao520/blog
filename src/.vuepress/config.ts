import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  lang: "zh-CN",
  title: "白桃与猫",
  description: "白桃与猫",
  
  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
