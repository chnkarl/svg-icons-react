import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function SurpriseLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m5-2.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m7 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M12 14a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0", size: size, color: color, gradient: gradient }));
}
