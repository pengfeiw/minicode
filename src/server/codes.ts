import codes from "./codes.json";

export interface Code {
    path: string;
    name: string;
    url: string;
    image: string;
    description: string;
    keywords: string[];
    repository: string;
}

const getCodes = (): Code[] => codes;

export default getCodes();
