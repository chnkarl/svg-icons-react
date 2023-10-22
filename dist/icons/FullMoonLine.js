import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function FullMoonLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm.5 10a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM8 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm6.5-4a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm0 2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Z", size: size, color: color, gradient: gradient }));
}
