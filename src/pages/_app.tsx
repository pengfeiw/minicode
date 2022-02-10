import React from "react";
import type {AppProps} from "next/app"
import {ChakraProvider, DarkMode} from "@chakra-ui/react";
import {theme as defaultTheme} from "src/ui/theme";
import "polyfill-object.fromentries";
import {AccentGlobal} from "src/components/accent";
import {PrismGlobal} from "src/ui/prism";
import {DefaultSeo} from "next-seo";
import defaultSeoConfig from "../next-seo.json";

function MyApp({Component, pageProps}: AppProps) {

    const getLayout = (Component as any).getLayout || ((page: any) => page);
    return (
        <>
            <DefaultSeo {...defaultSeoConfig} />
            <ChakraProvider theme={defaultTheme}>
                <AccentGlobal />
                <PrismGlobal />
                {/* force to drak mode */}
                <DarkMode>
                    {getLayout(<Component {...pageProps} />)}
                </DarkMode>
            </ChakraProvider>
        </>
    );
}

export default MyApp
