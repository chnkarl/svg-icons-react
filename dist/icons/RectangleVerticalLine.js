import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function RectangleVerticalLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2zM6 4v16h12V4z", size: size, color: color, gradient: gradient }));
}
