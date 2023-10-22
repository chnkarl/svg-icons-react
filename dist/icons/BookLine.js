import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function BookLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M10 3c.667 0 1.333.253 2 .76.667-.507 1.333-.76 2-.76h6a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-7c0 .552-.45 1-1 1s-1-.45-1-1H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6Zm0 2H4v13h7V6c0-.55-.45-1-1-1Zm10 0h-6c-.55 0-1 .45-1 1v12h7V5Z", size: size, color: color, gradient: gradient }));
}
