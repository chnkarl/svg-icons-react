import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function BrushLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M8 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5h4a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h4zm6 0h-4v5a2 2 0 0 1-2 2H4v2h16v-2h-4a2 2 0 0 1-2-2zm6 11H4v5h2v-2a1 1 0 1 1 2 0v2h3v-2a1 1 0 1 1 2 0v2h3v-2a1 1 0 1 1 2 0v2h2z", size: size, color: color, gradient: gradient }));
}
