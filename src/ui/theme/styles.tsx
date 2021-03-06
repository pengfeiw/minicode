import type {Styles} from "@chakra-ui/theme-tools"
import {Global} from "@emotion/react"

// export const FontsGlobal = () => (
//     <Global
//         styles={
//             `@font-face {
//                     font-family: "Virgil";
//                     font-style: normal;
//                     font-weight: 400;
//                     font-display: swap;
//                     src: url("/fonts/FG_Virgil.woff2") format("woff2"),
//                         url("/fonts/FG_Virgil.woff") format("woff");
//                 }
//                 @font-face {
//                     font-family: "Cascadia";
//                     font-style: normal;
//                     font-weight: 400;
//                     font-display: swap;
//                     src: url("/fonts/Cascadia.woff2") format("woff2"),
//                         url("/fonts/Cascadia.woff") format("woff");
//                 }
//             `
//         }
//     />
// );

export const styles: Styles = {
    global: ({colorMode}) => ({
        html: {
            lineHeight: 1.5,
            minWidth: "320px",
            scrollBehavior: "smooth",
            fontSmooth: "auto",
        },
        "html, body": {
            // bg: colorMode === "light" ? "white" : "gray.900",
            // color: colorMode === "light" ? "gray.800" : "gray.400"
            bg: "gray.900",
            color: "gray.400"
        },
        "*": {
            // borderColor: colorMode === "light" ? "gray.400" : "gray.700"
            borderColor: "gray.700"
        },
        "::placeholder": {
            // color: colorMode === "light" ? "gray.500" : "gray.500"
            color: "gray.500"
        },
        mark: {
            background: "none",
            color: "inherit"
        },
        del: {
            textDecoration: "var(--chakra-colors-white);"
        },
        ".darkModeInvertLuminosity": {
            // filter: colorMode === "dark" ? "invert(93%) hue-rotate(180deg)" : "none"
            filter: "invert(93%) hue-rotate(180deg)"
        },
        "a.highlighted-link": {
            transition: "all 0.15s ease-out",
            outline: "none",
            // color: colorMode === "dark" ? "var(--colors-accent-300)" : "var(--colors-accent-500)",
            color: "var(--colors-accent-300)",
            "&:focus": {
                boxShadow: "outline"
            }
        },
        "::selection": {
            // bg: colorMode === "dark" ? "var(--colors-accent-700)" : "var(--colors-accent-200)"
            bg: "var(--colors-accent-700)"
        },
        "ul, ol": {
            mb: 8 // "2rem"
        },
        "li > ul, li > ol": {
            mb: 0
        },
        "img": {
            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%)",
            borderRadius: "5px"
        },
        ".rc-pagination *": {
            backgroundColor: "#414756 !important",
            border: "none !important",
            borderRadius: "2px"
        },
        ".rc-pagination .rc-pagination-item-active *": {
            // color: colorMode === "dark"
            // ? "var(--colors-accent-300)"
            // : "var(--colors-accent-500)",
            color: "var(--colors-accent-300)"
        }
    })
}
