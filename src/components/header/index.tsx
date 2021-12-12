import React from "react";
import {Flex, HStack, IconButton, Text} from "@chakra-ui/react";
import AvatarSvg from "./avatar";
import {ColorModeSwitch} from "src/components/colorModeSwitch";
import {GithubLink} from "src/components/githubLink";
import {AccentPicker} from "src/components/accent";
import {OutgoingLink} from "src/components/link";
import {useColorMode} from "@chakra-ui/react";
import {ExternalLinkIcon} from "@chakra-ui/icons";

interface Props {
    githubSrc?: string;
    newWindowSrc?: string;
}

const Header: React.FC<Props> = (props) => {
    const {githubSrc, newWindowSrc} = props;
    const {colorMode} = useColorMode();
    const openInNewWindow = newWindowSrc ? true : false;

    const OpenInNewWin = (
        <OutgoingLink href={newWindowSrc}>
            <IconButton
                aria-label={colorMode === "dark" ? "Dark Mode" : "Light Mode"}
                icon={<ExternalLinkIcon />}
                isRound
            />
        </OutgoingLink>
    );

    return (
        <Flex flexDirection="row" justifyContent="space-between" mb="40px" wrap="wrap" gridRowGap="15px" gridColumnGap="15px">
            <OutgoingLink href="https://pengfeiw.github.io/hellolinearalgebra/" target="_blank">
                <HStack alignItems="end">
                    <AvatarSvg />
                    <Text fontSize="17px" fontWeight="bold">MINI CODE</Text>
                </HStack>
            </OutgoingLink>
            <HStack>
                {
                    openInNewWindow ? OpenInNewWin : <></>
                }
                <GithubLink src={githubSrc} />
                <AccentPicker
                    aria-label="Accent Color Picker"
                    zIndex={1}
                />
                <ColorModeSwitch />
            </HStack>
        </Flex>
    );
};

export default Header;
