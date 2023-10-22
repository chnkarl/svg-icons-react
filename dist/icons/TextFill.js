import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function TextFill({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M5 3.5a1.5 1.5 0 1 0 0 3h5.5V20a1.5 1.5 0 0 0 3 0V6.5H19a1.5 1.5 0 0 0 0-3H5Z", size: size, color: color, gradient: gradient }));
}
