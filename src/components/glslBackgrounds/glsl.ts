import defaultBackground from "src/glsl/defaultBackground.fs";
import waveBackground from "src/glsl/wave.fs";
import vertLinesBackground from "src/glsl/vertLines.fs";

const glslBackgrounds = {
    defaultBackground,
    waveBackground,
    vertLinesBackground
};

export type GlslBackgroundKeys = keyof typeof glslBackgrounds;

export default glslBackgrounds;
