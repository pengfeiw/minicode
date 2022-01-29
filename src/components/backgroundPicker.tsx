import React from 'react'
import {IconButton, IconButtonProps} from '@chakra-ui/react'
import {useLocalSetting} from 'src/hooks/useLocalSetting'
import glslBackgrounds, {GlslBackgroundKeys} from "src/components/glslBackgrounds/glsl";
import {BsLifePreserver} from "react-icons/bs"

export const BackgroundPicker: React.FC<IconButtonProps> = ({...props}) => {
    const [key, setBackgroundKey] = useLocalSetting<GlslBackgroundKeys>("glslBackgroundKey", "defaultBackground");

    const update = React.useCallback(() => {
        const backgroundKeys = Object.keys(glslBackgrounds) as GlslBackgroundKeys[];
        let index = backgroundKeys.indexOf(key)
        index = (index + 1) % backgroundKeys.length;
        setBackgroundKey(backgroundKeys[index])
    }, [key])

    return (
        <IconButton
            icon={<BsLifePreserver />}
            isRound
            onMouseDown={update}
            {...props}
        />
    )
}
