import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function TextLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M5 4a1 1 0 0 0 0 2h6v14a1 1 0 1 0 2 0V6h6a1 1 0 1 0 0-2H5Z", size: size, color: color, gradient: gradient }));
}
