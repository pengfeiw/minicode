import React from "react";
import {Flex, HStack, IconButton, Text} from "@chakra-ui/react";
import AvatarSvg from "./avatar";
import {ColorModeSwitch} from "src/components/colorModeSwitch";
import {GithubLink} from "src/components/githubLink";
import {AccentPicker} from "src/components/accent";
import {OutgoingLink, RouteLink} from "src/components/link";
import {useColorMode} from "@chakra-ui/react";
import {ExternalLinkIcon, AttachmentIcon} from "@chakra-ui/icons";

interface Props {
    githubSrc?: string;
    blogSrc?: string;
    newWindowSrc?: string;
}

const Header: React.FC<Props> = (props) => {
    const {githubSrc, blogSrc, newWindowSrc} = props;
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
        <Flex alignItems="center" flexDirection="row" justifyContent="space-between" mb="40px" wrap="wrap" gridRowGap="15px" gridColumnGap="15px">
            <RouteLink to="https://pengfeiw.github.io/minicode/">
                <HStack alignItems="end">
                    <AvatarSvg />
                </HStack>
            </RouteLink>
            <HStack>
                {
                    openInNewWindow ? OpenInNewWin : <></>
                }
                {
                    hasBlogSrc ? BlogLink : <></>
                }
                <GithubLink src={githubSrc} />
                <AccentPicker
                    aria-label="Accent Color Picker"
                    zIndex={1}
                    title="change theme color"
                />
                <ColorModeSwitch title="switch to light or dark mode" />
            </HStack>
        </Flex>
    );
};

export default Header;
