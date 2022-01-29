import defaultBackground from "src/glsl/defaultBackground.fs";

const glslBackgrounds = {
    defaultBackground
};

export type GlslBackgroundKeys = keyof typeof glslBackgrounds;

export default glslBackgrounds;
