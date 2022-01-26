import React from "react";
import {Flex, HStack, VStack, IconButton, Text} from "@chakra-ui/react";
import AvatarSvg from "./avatar";
import {ColorModeSwitch} from "src/components/colorModeSwitch";
import {GithubLink} from "src/components/githubLink";
import {AccentPicker} from "src/components/accent";
import {RouteLink} from "src/components/link";

interface Props {
    githubSrc?: string;
}

const Header: React.FC<Props> = (props) => {
    const {githubSrc} = props;

    return (
        <Flex alignItems="center" flexDirection="row" justifyContent="space-between" mb="40px" wrap="wrap" gridRowGap="15px" gridColumnGap="15px">
            <RouteLink to="https://pengfeiw.github.io/minicode/">
                <HStack alignItems="end">
                    <AvatarSvg />
                </HStack>
            </RouteLink>
            <VStack
                position="fixed"
                right={["10px", "20px", "50px"]}
                bottom="35px"
                zIndex={1}
            >
                <GithubLink src={githubSrc} />
                <AccentPicker
                    aria-label="Accent Color Picker"
                    zIndex={1}
                    title="change theme color"
                />
                <ColorModeSwitch title="switch to light or dark mode" />
            </VStack>
        </Flex>
    );
};

export default Header;
