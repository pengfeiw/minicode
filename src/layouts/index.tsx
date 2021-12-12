import {FC, PropsWithChildren} from "react";
import Header from "src/components/header";
import Footer from "src/components/footer";
import {NextSeo} from "next-seo";

const Layout: FC<PropsWithChildren<undefined>> = ({children}) => {
    return (
        <>
            <NextSeo 
                title="MINICODE"
                titleTemplate="%s"
                description="MINICODE是一个小程序发布平台，开源，共享。"
                openGraph={{
                    title: "MINICODE",
                    description: "MINICODE是一个小程序发布平台，开源，共享。"
                }}
            />
            <Header />
            {children}
            <Footer />
        </>
    )
};

export default Layout;
