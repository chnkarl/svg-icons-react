import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function RectangleLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm18 0H4v12h16z", size: size, color: color, gradient: gradient }));
}
