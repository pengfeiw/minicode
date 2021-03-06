import {extendTheme, ThemeOverride} from '@chakra-ui/react'
import {styles} from './styles'
import {colors} from './foundations/colors'
import {textStyles} from './foundations/textStyles'
import {mergeWith} from '@chakra-ui/utils'

// Re-exports
export {useLinkColor, accentKeys} from './foundations/colors'
export type {ColorKeys} from './foundations/colors'

export function makeTheme(overrides: ThemeOverride = {}) {
    const theme = extendTheme({
        initialColorMode: 'dark',
        useSystemColorMode: false,
        colors,
        styles,
        textStyles,
        // fonts: defaultTheme.fonts,
        // shadows: defaultTheme.shadows
    })
    return mergeWith(overrides, theme)
}

export const theme = makeTheme()
