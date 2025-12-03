import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function ProjectorLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M15 4a1 1 0 1 1 0 2h-2v2h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h6V6H9a1 1 0 0 1 0-2zm4 6H5a1 1 0 0 0-1 1v1h3a1 1 0 1 1 0 2H4v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1m-3 1a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2", size: size, color: color, gradient: gradient }));
}
