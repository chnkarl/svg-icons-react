import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function InsLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M16 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm0 2H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3m-4 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4m4.5-3.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2", size: size, color: color, gradient: gradient }));
}
