import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function BarcodeLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7Zm18 0H4v10h16V7ZM6 8a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1Zm4 0a1 1 0 0 1 1 1 1 1 0 1 1 2 0v6a1 1 0 1 1-2 0 1 1 0 1 1-2 0V9a1 1 0 0 1 1-1Zm5 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1Zm3 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1Z", size: size, color: color, gradient: gradient }));
}
