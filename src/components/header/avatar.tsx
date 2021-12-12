import React, {FC} from "react";
import {Svg} from "src/components/svg";
import {useLinkColor} from "src/ui/theme";


const AvatarSvg: FC<any> = (props) => {
    const color = useLinkColor();

    return (
        <Svg viewBox="0 0 212 48" height="40px" width="200px" fill={color} {...props}>
            <title>MiniCode | Wang Pengfei</title>
            <polygon points="18 0 18 9 15 9 15 17 8 17 8 9 5 9 5 0 0 0 0 48 5 48 5 20 9 20 9 31 14 31 14 20 18 20 18 48 23 48 23 0 18 0" />
            <polygon points="47 5 47 0 32 0 32 5 37 5 37 43 32 43 32 48 47 48 47 43 42 43 42 5 47 5" />
            <polygon points="101 5 101 0 86 0 86 5 91 5 91 43 86 43 86 48 101 48 101 43 96 43 96 5 101 5" />
            <polygon points="55 48 55 0 60 0 60 9 63 9 63 17 69 17 69 29 73 29 73 0 78 0 78 48 73 48 73 39 70 39 70 31 64 31 64 20 60 20 60 48 55 48" />
            <polygon points="116 0 123 0 123 2 129 2 129 15 124 15 124 5 115 5 115 43 124 43 124 32 129 32 129 45 123 45 123 48 116 48 116 45 110 45 110 2 116 2 116 0" />
            <path d="M151,3V0h-7V3h-6V45h6v3h7V45h6V3Zm1,40h-9V6h9Z" />
            <path d="M180,3V0H167V48h13V45h6V3Zm1,40h-9V6h9Z" />
            <polygon points="196 1 212 1 212 6 201 6 201 20 211 20 211 25 201 25 201 43 212 43 212 48 196 48 196 1" />
        </Svg>
    );
};

export default AvatarSvg;
