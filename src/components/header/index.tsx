import React from "react";
import {Flex, Box, HStack, VStack, IconButton, Text} from "@chakra-ui/react";
import AvatarSvg from "./avatar";
import {ColorModeSwitch} from "src/components/colorModeSwitch";
import {GithubLink} from "src/components/githubLink";
import {AccentPicker} from "src/components/accent";
import {BackgroundPicker} from "src/components/backgroundPicker";
import {OutgoingLink, RouteLink} from "src/components/link";
import {Paragraph} from "../primitives/typography";

interface Props {
    githubSrc?: string;
}

const Header: React.FC<Props> = (props) => {
    const {githubSrc} = props;

    return (
        <>
            <Box mb="40px" zIndex={1}>
                <VStack alignItems="start">
                    <RouteLink to="https://pengfeiw.github.io/minicode/">
                        <AvatarSvg />
                    </RouteLink>
                    <Paragraph pl="10px" mt="15px">
                        created by
                        <OutgoingLink href="https://pengfeixc.com"> @Wang Pengfei, </OutgoingLink>
                        with ❤
                    </Paragraph>
                </VStack>
            </Box>
            <VStack
                position="fixed"
                right={["10px", "20px", "50px"]}
                bottom="35px"
                zIndex={1}
            >
                <GithubLink src={githubSrc} />
                <AccentPicker
                    aria-label="Accent Color Picker"
                    title="change theme color"
                />
                <BackgroundPicker
                    aria-label="Background Picker"
                    title="change background"
                />
                {/* <ColorModeSwitch title="switch to light or dark mode" /> */}
            </VStack>
        </>
    );
};

export default Header;
