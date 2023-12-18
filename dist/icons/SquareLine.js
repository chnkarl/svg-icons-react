import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function SquareLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm16 0H5v14h14z", size: size, color: color, gradient: gradient }));
}
