
import {Box} from "@chakra-ui/react";
import {useEffect, useRef, useState} from "react";
import {useLocalSetting} from "src/hooks/useLocalSetting";
import glslBackgrounds, {GlslBackgroundKeys} from "./glsl";

const GlslBackground = () => {
    const [key] = useLocalSetting<GlslBackgroundKeys>("glslBackgroundKey", "defaultBackground");
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [sandbox, setSandbox] = useState<any>();

    useEffect(() => {
        const GlslCanvas = require("./glslCanvas");
        const canvas = canvasRef.current;
        if (canvas) {
            canvas.style.width = "100%";
            canvas.style.height = "100%";
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;
            setSandbox(new GlslCanvas(canvas));
        }
    }, [canvasRef]);

    useEffect(() => {
        if (sandbox) {
            const fs = glslBackgrounds[key];
            sandbox.load(fs);
        }
    }, [sandbox, key]);

    return (
        <Box position="fixed" bottom={0} right={0} top="0" left="0">
            <canvas ref={canvasRef}></canvas>
        </Box>
    );
};

export default GlslBackground;
