import React from "react"
import {IconButton, useColorMode} from "@chakra-ui/react"
import {GoMarkGithub} from "react-icons/go";
import {OutgoingLink} from "./link";

interface Props {
    src?: string;
}

export const GithubLink: React.FC<Props> = (props) => {
    const {src} = props;

    const href = src ?? "https://github.com/pengfeiw/minicode";

    const {colorMode} = useColorMode();
    return (
        <OutgoingLink href={href}>
            <IconButton
                aria-label={colorMode === "dark" ? "Dark Mode" : "Light Mode"}
                icon={<GoMarkGithub />}
                isRound
                {...props}
            />
        </OutgoingLink>
    );
};
