import React from "react";
import {Box, Text} from "@chakra-ui/react";
import {OutgoingLink} from "src/components/link";
import {H1} from "../primitives/typography";

const Footer = () => (
    <Box mt="60px">
        <Text textAlign="center">
            <OutgoingLink href="https://pengfeiw.github.io/minicode/sitemap.xml">
                <H1 fontSize="inherit" fontWeight="normal" display="inline"> 🛕minicode </H1>
            </OutgoingLink>
            |
            <OutgoingLink href="https://pengfeiw.github.io/minicode/sitemap.xml"> 📖sitemap </OutgoingLink>
            |
            <OutgoingLink href="https://pengfeixc.com"> 🏔WangPF</OutgoingLink>
        </Text>
        <Text textAlign="center" mt="30px">
            本站采用
            <OutgoingLink href="https://nextjs.org/">NextJs</OutgoingLink>
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
