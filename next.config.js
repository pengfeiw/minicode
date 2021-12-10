const withPlugins = require("next-compose-plugins")

const IsDevelopment = process.env.NODE_ENV === "development";
const nextConfig = {
    webpack5: !IsDevelopment,
    pageExtensions: ["js", "jsx", "ts", "tsx"],
};

module.exports = withPlugins([], nextConfig);
