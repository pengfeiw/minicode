import React from "react";
import {Box, Flex, HStack, IconButton} from "@chakra-ui/react";
import {ColorModeSwitch} from "src/components/colorModeSwitch";
import {GithubLink} from "src/components/githubLink";
import {AccentPicker} from "src/components/accent";
import {OutgoingLink} from "src/components/link";
import {useColorMode} from "@chakra-ui/react";
import {ExternalLinkIcon, AttachmentIcon} from "@chakra-ui/icons";
import {H1} from "../primitives/typography";
import {GoHome} from "react-icons/go";
import {useLinkColor} from "src/ui/theme";

interface Props {
    githubSrc?: string;
    blogSrc?: string;
    title: string;
    description: string;
    newWindowSrc?: string;
}

const Header: React.FC<Props> = (props) => {
    const {githubSrc, blogSrc, newWindowSrc, title, description} = props;
    const {colorMode} = useColorMode();
    const openInNewWindow = newWindowSrc ? true : false;
    const hasBlogSrc = blogSrc ? true : false;

    const OpenInNewWin = (
        <OutgoingLink href={newWindowSrc} title="open in new window">
            <IconButton
                aria-label={colorMode === "dark" ? "Dark Mode" : "Light Mode"}
                icon={<ExternalLinkIcon />}
                isRound
            />
        </OutgoingLink>
    );

    const BlogLink = (
        <OutgoingLink href={blogSrc} title="open related article">
            <IconButton
                aria-label={colorMode === "dark" ? "Dark Mode" : "Light Mode"}
                icon={<AttachmentIcon />}
                isRound
            />
        </OutgoingLink>
    );

    return (
        <Flex
            alignItems="center"
            flexDirection="row"
            justifyContent="space-between"
            padding="15px 10px"
            wrap="wrap"
            gridRowGap="15px"
            gridColumnGap="15px"
        >
            <Box>
                <Box>
                    <H1 fontWeight="normal" fontSize="20px" m={0} mb="5px" color={useLinkColor()}>{title}</H1>
                </Box>
                <Box>{description}</Box>
            </Box>
            <HStack>
                <OutgoingLink href="https://pengfeiw.github.io/minicode" title="home">
                    <IconButton
                        aria-label="Go home"
                        icon={<GoHome />}
                        isRound
                    />
                </OutgoingLink>
                {
                    openInNewWindow ? OpenInNewWin : <></>
                }
                {
                    hasBlogSrc ? BlogLink : <></>
                }
                <GithubLink src={githubSrc} />
                <AccentPicker
                    aria-label="Accent Color Picker"
                    title="change theme color"
                />
                {/* <ColorModeSwitch title="switch to light or dark mode" /> */}
            </HStack>
        </Flex>
    );
};

export default Header;
