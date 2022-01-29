import defaultBackground from "src/glsl/defaultBackground.fs";
import waveBackground from "src/glsl/wave.fs";

const glslBackgrounds = {
    defaultBackground,
    waveBackground
};

// export const glslBackgroundKeys = Object.keys(glslBackgrounds) as GlslBackgroundKeys[];

export type GlslBackgroundKeys = keyof typeof glslBackgrounds;

export default glslBackgrounds;
