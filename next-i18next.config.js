/* eslint-disable */
module.exports = {
  i18n: {
    defaultLocale: "zh",
    locales: ["zh"],
  },
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "/locales",
  // debug: process.env.NODE_ENV === "development",
  reloadOnPrerender: process.env.NODE_ENV === "development",
  ns: ["common", "help", "settings", "chat"],
};
