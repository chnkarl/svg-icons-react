import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function Paint2Fill({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M3 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3h1a2 2 0 0 1 2 2v1.38a5 5 0 0 1-4.503 4.975l-5.497.55V14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2v-.095a2 2 0 0 1 1.801-1.99l5.498-.55A3 3 0 0 0 20 8.38V7h-1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z", size: size, color: color, gradient: gradient }));
}
