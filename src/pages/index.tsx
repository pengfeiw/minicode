import {Flex, Grid, Box, Image, Text, useColorModeValue} from "@chakra-ui/react";
import Footer from "src/components/footer";
import Header from "src/components/header";
import {LayoutPage} from "../typing";
import codes from "src/server/codes";
import {useLinkColor} from "src/ui/theme";
import {OutgoingLink, RouteLink} from "src/components/link";

const Home: LayoutPage = () => {
    const Textcolor = useLinkColor();

    const backgroundColor = useColorModeValue("#f7fafc", "#3d4756");

    return (
        <Box>
            <Grid wrap="wrap" justifyContent="space-around" gridRowGap={5} gridTemplateColumns={["repeat(1, 95%)", "repeat(2, 45%)", "repeat(3,30%)"]}>
                {
                    codes.map((code) => (
                        <Box width="100%" key={code.url} textAlign="center" borderRadius="5px" overflow="hidden">
                            <Box
                                position="relative"
                                height="100%"
                                onClick={() => window.open(`./${code.path}`, "_blank")}
                                cursor="pointer"
                            >
                                <Image width="100%" height="100%" src={code.image} alt={code.name} />
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
                        </Box>
                    ))
                }
            </Grid>
        </Box>
    );
};

Home.getLayout = (page) => {
    return (
        <Flex
            maxW={1000}
            margin="0 auto"
            padding="20px 10px"
            flexDir="column"
            minH="100vh"
        >
            <Header />
            <Box flexGrow={1}>
                {page}
            </Box>
            <Footer />
        </Flex>
    );
}

export default Home;
