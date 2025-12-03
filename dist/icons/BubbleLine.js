import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function BubbleLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M16 15a3 3 0 1 1 0 6 3 3 0 0 1 0-6m-9-4a4 4 0 1 1 0 8 4 4 0 0 1 0-8m9 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-9-4a2 2 0 1 0 0 4 2 2 0 0 0 0-4m9-10a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6", size: size, color: color, gradient: gradient }));
}
