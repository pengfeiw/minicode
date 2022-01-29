import React from "react";
import {Box, Text} from "@chakra-ui/react";
import {OutgoingLink} from "src/components/link";
import {H1} from "../primitives/typography";

const Footer = () => (
    <Box mt="60px" zIndex={1}>
        <Box textAlign="center">
            <H1
                fontSize="inherit"
                fontWeight="normal"
                display="inline"
                onClick={() => window.open("./")}
                _hover={{
                textDecoration: "underline",
                cursor: "pointer"
            }}> 🛕minicode </H1>
            |
            <OutgoingLink href="https://pengfeiw.github.io/minicode/sitemap.xml"> 📖sitemap </OutgoingLink>
            |
            <OutgoingLink href="https://pengfeixc.com"> 🏔WangPF</OutgoingLink>
        </Box>
        <Text textAlign="center" mt="30px">
            本站采用
            <OutgoingLink href="https://nextjs.org/">NextJS</OutgoingLink>
            和
            <OutgoingLink href="https://chakra-ui.com/">ChakraUI</OutgoingLink>
            搭建，
            感谢
            <OutgoingLink href="https://github.com/">Github</OutgoingLink>
            提供的免费服务。
        </Text>
    </Box>
);

export default Footer;
