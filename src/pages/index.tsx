import {Flex, Grid, Box, Image, Text} from "@chakra-ui/react";
import Footer from "src/components/footer";
import Header from "src/components/header";
import {LayoutPage} from "../typing";
import codes from "src/server/codes";

const Home: LayoutPage = () => {

    return (
        <Box>
            <Grid wrap="wrap" gridRowGap="30px" gridColumnGap="20px" gridTemplateColumns={["repeat(1, 95%)", "repeat(2, 45%)", "repeat(3, 31%)"]}>
                {
                    codes.map((code) => (
                        <Box width="100%" key={code.url} position="relative" textAlign="center" >
                            <Image width="100%" height="100%" src={code.image} alt={code.name} />
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
                                <Text flexGrow={0}>
                                    {code.description}
                                </Text>
                            </Flex>
                            <Text mt="10px">
                                {code.name}
                            </Text>
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
