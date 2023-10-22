interface typeGradient {
    from: {
        x: number;
        y: number;
    };
    to: {
        x: number;
        y: number;
    };
    steps: {
        offset: number | string;
        color: string;
        opacity: number;
    }[];
}
interface typeIcon {
    color?: string;
    size?: string | number;
    gradient?: typeGradient;
}
export default function ChoiceLine({ color, size, gradient }: typeIcon): import("react/jsx-runtime").JSX.Element;
export {};
