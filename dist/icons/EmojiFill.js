import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function EmojiFill({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m2.8 11.857A3.984 3.984 0 0 1 12 15a3.984 3.984 0 0 1-2.8-1.143 1 1 0 1 0-1.4 1.428A5.984 5.984 0 0 0 12 17a5.984 5.984 0 0 0 4.2-1.715 1 1 0 0 0-1.4-1.428M8.5 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m7 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3", size: size, color: color, gradient: gradient }));
}
