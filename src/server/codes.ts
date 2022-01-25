import codes from "./codes.json";

export interface Code {
    name: string;
    blog: string;
    path: string;
    url: string;
    image: string;
    description: string;
    keywords: string[];
    repository: string;
}

const getCodes = (): Code[] => (codes as any).reverse();

export default getCodes();
