import {Flex, Grid, Box, Image, Text, useColorModeValue} from "@chakra-ui/react";
import Footer from "src/components/footer";
import Header from "src/components/header";
import {LayoutPage} from "../typing";
import codes, {Code} from "src/server/codes";
import {useLinkColor} from "src/ui/theme";
import GlslBackground from "src/components/glslBackgrounds";
import {useEffect, useState} from "react";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

const Home: LayoutPage = () => {
    const Textcolor = useLinkColor();
    const backgroundColor = useColorModeValue("#f7fafc", "#3d4756");

    const [showcodes, setShowcodes] = useState<Code[]>([]);
    const [pageIndex, setPageIndex] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(9);

    useEffect(() => {
        const start = pageSize * (pageIndex - 1);
        const end = Math.min(start + pageSize, codes.length);
        setShowcodes(codes.slice(start, end));
    }, [pageIndex, setPageSize]);

    return (
        <Box>
            <Box
                textAlign={"right"}
                paddingRight="20px"
                mb="10px"
            >
                <Pagination
                    pageSize={pageSize}
                    current={pageIndex}
                    total={codes.length}
                    onChange={(page: number) => setPageIndex(page)}
                />
            </Box>
            <Grid wrap="wrap" justifyContent="space-around" gridRowGap={5} gridTemplateColumns={["repeat(1, 95%)", "repeat(2, 45%)", "repeat(3,30%)"]}>
                {
                    showcodes.map((code) => (
                        <Box
                            width="100%"
                            key={code.url}
                            textAlign="center"
                            borderRadius="5px"
                            overflow="hidden"
                            transition="1s"
                            _hover={{
                                transform: "translateY(-6px)",
                                boxShadow: "rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px"
                            }}
                        >
                            <a href={`./${code.path}`} target="_blank" rel="noreferrer">
                                <Box
                                    position="relative"
                                    height="100%"
                                    cursor="pointer"
                                >
                                    <Image
                                        width="100%"
                                        height="100%"
                                        src={code.image}
                                        alt={code.name}
                                    />
                                    <Text p="5px 0px" position="absolute" bottom="0" color={Textcolor} bg={backgroundColor} width="100%">
                                        {code.name}
                                    </Text>
                                    <Flex
                                        pos="absolute"
                                        top="0"
                                        left="0"
                                        height="100%"
                                        width="100%"
                                        alignItems="center"
                                        justifyContent="center"
                                        color="transparent"
                                        transition="1s"
                                        pl={5}
                                        pr={5}
                                        _hover={{
                                            color: "white",
                                            background: "#bababacc"
                                        }}
                                    >
                                        {code.description}
                                    </Flex>
                                </Box>
                            </a>
                        </Box>
                    ))
                }
            </Grid>
        </Box>
    );
};

Home.getLayout = (page) => {
    return (
        <>
            <GlslBackground />
            <Flex
                maxW={1000}
                margin="0 auto"
                padding="20px 10px"
                flexDir="column"
                minH="100vh"
                position="relative"
            >
                <Header />
                <Box flexGrow={1}>
                    {page}
                </Box>
                <Footer />
            </Flex>
        </>
    );
}

export default Home;
