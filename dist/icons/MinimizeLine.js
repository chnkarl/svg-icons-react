import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function MinimizeLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M3 12a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1", size: size, color: color, gradient: gradient }));
}
