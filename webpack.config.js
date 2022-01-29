module.exports = {
    module: {
        rules: [
            {
                test: /\.(glsl|fs|vs)$/,
                exclude: /node_modules/,
                use: "glslify-import-loader",
            },
            {
                test: /\.(glsl|fs|vs)$/,
                exclude: /node_modules/,
                use: "raw-loader"
            },
            {
                test: /\.(glsl|fs|vs)$/,
                exclude: /node_modules/,
                use: "glslify-loader",
            }
        ]
    }
};
