import {FC, PropsWithChildren} from "react";
import Header from "src/components/header";
import Footer from "src/components/footer";
import {Box} from "@chakra-ui/react";

const Layout: FC<PropsWithChildren<undefined>> = ({children}) => {
    return (
        <Box>
            <Header />
                {children}
            <Footer />
        </Box>
    )
};

export default Layout;
