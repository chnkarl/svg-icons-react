import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function AddLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M11 20a1 1 0 1 0 2 0v-7h7a1 1 0 1 0 0-2h-7V4a1 1 0 1 0-2 0v7H4a1 1 0 1 0 0 2h7z", size: size, color: color, gradient: gradient }));
}
