import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function PadLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M18 2a2 2 0 0 1 1.995 1.85L20 4v16a2 2 0 0 1-1.85 1.995L18 22H6a2 2 0 0 1-1.995-1.85L4 20V4a2 2 0 0 1 1.85-1.995L6 2zm0 2H6v16h12zm-5.5 12a.5.5 0 0 1 .492.41l.008.09v1a.5.5 0 0 1-.41.492L12.5 18h-1a.5.5 0 0 1-.492-.41L11 17.5v-1a.5.5 0 0 1 .41-.492L11.5 16z", size: size, color: color, gradient: gradient }));
}
