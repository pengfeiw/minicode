import {Flex, VStack, Box} from "@chakra-ui/react";
import Footer from "src/components/footer";
import Header from "src/components/header";
import {LayoutPage} from "../typing";

const Home: LayoutPage = () => {

    return <div>Home</div>
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
