import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function SpeakerLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm0 2H7a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1m-5 6a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0-6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3", size: size, color: color, gradient: gradient }));
}
