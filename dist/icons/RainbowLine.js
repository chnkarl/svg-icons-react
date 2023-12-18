import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function RainbowLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M12 5c6.075 0 11 4.925 11 11v1a1 1 0 1 1-2 0v-1a9 9 0 1 0-18 0v1a1 1 0 1 1-2 0v-1C1 9.925 5.925 5 12 5m0 4a7 7 0 0 1 7 7v1a1 1 0 1 1-2 0v-1a5 5 0 0 0-10 0v1a1 1 0 1 1-2 0v-1a7 7 0 0 1 7-7m0 4a3 3 0 0 1 3 3v1a1 1 0 1 1-2 0v-1a1 1 0 1 0-2 0v1a1 1 0 1 1-2 0v-1a3 3 0 0 1 3-3", size: size, color: color, gradient: gradient }));
}
