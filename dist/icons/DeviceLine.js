import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function DeviceLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M17 4a2 2 0 0 1 1.995 1.85L19 6v2h1a2 2 0 0 1 1.995 1.85L22 10v9a2 2 0 0 1-1.85 1.995L20 21h-4a1.998 1.998 0 0 1-1.647-.866L14.268 20H4a2 2 0 0 1-1.995-1.85L2 18V6a2 2 0 0 1 1.85-1.995L4 4zm3 6h-4v9h4zm-3-4H4v12h10v-8a2 2 0 0 1 2-2h1z", size: size, color: color, gradient: gradient }));
}
