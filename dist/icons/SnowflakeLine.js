import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function SnowflakeLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M13 3a1 1 0 1 0-2 0v3.586L8.707 4.293a1 1 0 0 0-1.414 1.414L11 9.414V11H9.414L5.707 7.293a1 1 0 0 0-1.414 1.414L6.586 11H3a1 1 0 1 0 0 2h3.586l-2.293 2.293a1 1 0 1 0 1.414 1.414L9.414 13H11v1.586l-3.707 3.707a1 1 0 1 0 1.414 1.414L11 17.414V21a1 1 0 1 0 2 0v-3.586l2.293 2.293a1 1 0 0 0 1.414-1.414L13 14.586V13h1.586l3.707 3.707a1 1 0 0 0 1.414-1.414L17.414 13H21a1 1 0 1 0 0-2h-3.586l2.293-2.293a1 1 0 0 0-1.414-1.414L14.586 11H13V9.414l3.707-3.707a1 1 0 0 0-1.414-1.414L13 6.586z", size: size, color: color, gradient: gradient }));
}
