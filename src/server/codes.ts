interface Code {
    name: string;
    url: string;
    image: string;
    description: string;
    keywords: string[];
    repository: string;
}

const getCodes = (): Code[] => [
    {
        name: "3D 俄罗斯方块（3d-tetris）",
        url: "https://pengfeiw.github.io/3d-tetris",
        image: "/images/3d-tetris.jpg",
        description: "使用 WebGL 和 TypeScript 绘制的三维俄罗斯方块游戏。",
        keywords: ["3D 俄罗斯方块", "Tetris", "3D Tetris", "3D", "WebGL", "三维", "TypeScript", "游戏", "game", "CG", "Computer Grahpics"],
        repository: "https://github.com/pengfeiw/3d-tetris"
    },
    {
        name: "React Paint",
        url: "https://pengfeiw.github.io/react-paint",
        image: "/images/react-paint.jpg",
        description: "使用 Web Canvas API 、TypeScript 和 React 制作的仿 windows 画板程序。",
        keywords: ["画板", "画图", "绘图程序", "Canvas", "TypeScript", "CG", "React"],
        repository: "https://github.com/pengfeiw/react-paint"
    },
    {
        name: "太阳系动画（Solar System）",
        url: "https://pengfeiw.github.io/solar-system",
        image: "/images/solar-system.jpg",
        description: "使用 WebGL 和 TypeScript 绘制的太阳系动画。",
        keywords: ["太阳系", "Solar System", "3D animation", "动画", "WebGL", "三维"],
        repository: "https://github.com/pengfeiw/solar-system"
    },
];

export default getCodes();
