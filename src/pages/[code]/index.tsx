import {GetStaticProps} from "next";
import React from "react";
import codes, {Code as ICode} from "src/server/codes";
import {Text, Flex} from "@chakra-ui/react";
import SubHeader from "src/components/header/subHeader";
import {LayoutPage} from "../../typing";
import {NextSeo} from "next-seo";
import {H1} from "src/components/primitives/typography";

interface CodeProps {
    code: ICode;
}

const Code: LayoutPage<CodeProps> = (props: CodeProps) => {
    const {code} = props;

    if (!code) {
        return <></>;
    }

    return (
        <>
            <NextSeo
                title={code.name}
                titleTemplate="%s | MINICODE"
                description={code.description}
                openGraph={{
                    title: code.name,
                    description: code.description
                }}
                additionalMetaTags={[
                    {property: "author", content: "王鹏飞"},
                    {property: "keywords", content: code.keywords.join(",")}
                ]}
            />
            <SubHeader title={code.name} description={code.description} githubSrc={code.repository} newWindowSrc={code.url} blogSrc={code.blog} />
            <iframe src={code.url} style={{
                flexGrow: 1,
                background: "white"
            }} />
        </>
    );
};

export const getStaticProps: GetStaticProps = async (context) => {
    const codePath = context.params!.code as string;

    const code = codes.find((item) => item.path === codePath);

    return {
        props: {code}
    };
}

export const getStaticPaths = () => ({
    fallback: false,
    paths: codes.map((code) => ({
        params: {
            code: code.path
        }
    }))
});

Code.getLayout = (page) => {
    return (
        <Flex
            margin="0 auto"
            flexDir="column"
            minH="100vh"
        >
            <Flex flexGrow={1} flexDir="column">
                {page}
            </Flex>
        </Flex>
    );
}

export default Code;
