import {GetStaticProps} from "next";
import React from "react";
import codes, {Code as ICode} from "src/server/codes";
import {Text, Flex} from "@chakra-ui/react";
import Header from "src/components/header";
import Footer from "src/components/footer";
import {LayoutPage} from "../../typing";


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
            <Header githubSrc={code.repository} newWindowSrc={code.url} />
            <Text mb={2} fontSize="sm">
                {code.description}
            </Text>
            <iframe src={code.url} style={{flexGrow: 1, borderRadius: "5px"}} />
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
            padding="20px 10px"
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
