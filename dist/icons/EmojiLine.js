import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function EmojiLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm2.8 9.857a1 1 0 1 1 1.4 1.428A5.984 5.984 0 0 1 12 17a5.984 5.984 0 0 1-4.2-1.715 1 1 0 0 1 1.4-1.428A3.984 3.984 0 0 0 12 15c1.09 0 2.077-.435 2.8-1.143ZM8.5 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z", size: size, color: color, gradient: gradient }));
}
