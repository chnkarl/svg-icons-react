import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function StopLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm14 0H6v12h12z", size: size, color: color, gradient: gradient }));
}
