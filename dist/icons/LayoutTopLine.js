import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function LayoutTopLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 2h14v3H5zm0 5v9h14v-9z", size: size, color: color, gradient: gradient }));
}
