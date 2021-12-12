const withPlugins = require("next-compose-plugins")
const {createSitemap} = require("./sitemap");

createSitemap();

const IsDevelopment = process.env.NODE_ENV === "development";
const nextConfig = {
    webpack5: !IsDevelopment,
    pageExtensions: ["js", "jsx", "ts", "tsx"],
    assetPrefix: IsDevelopment ? "" : "/minicode",
};

module.exports = withPlugins([], nextConfig);
