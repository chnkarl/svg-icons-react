import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function FigmaLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M15 2a4 4 0 0 1 2.646 7A4 4 0 0 1 13 15.465V18a4 4 0 1 1-6.646-3A3.99 3.99 0 0 1 5 12a3.99 3.99 0 0 1 1.354-3A4 4 0 0 1 9 2h6Zm-4 14H9a2 2 0 1 0 2 2v-2Zm0-6H9a2 2 0 1 0 0 4h2v-4Zm4 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0-6h-2v4h2a2 2 0 0 0 .15-3.995L15 4Zm-4 0H9a2 2 0 1 0 0 4h2V4Z", size: size, color: color, gradient: gradient }));
}
