export declare const Init: {
    icon: string;
    color: string;
    size: number;
    gradient: {
        from: {
            x: number;
            y: number;
        };
        to: {
            x: number;
            y: number;
        };
        steps: {
            offset: number;
            color: string;
            opacity: number;
        }[];
    };
};
type position = {
    x: number;
    y: number;
};
export type TypeInit = {
    icon: string;
    color?: string;
    size?: number;
    gradient?: {
        from: position;
        to: position;
        steps: {
            offset: number;
            color: string;
            opacity: number;
        }[];
    };
};
export {};
