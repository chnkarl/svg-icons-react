import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function DirectionsLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M12 2a1 1 0 0 1 1 1v1h3.586A2 2 0 0 1 18 4.586l1.707 1.707a1 1 0 0 1 0 1.414L18 9.414a2 2 0 0 1-1.414.586H13v1h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1v3h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-3H7.414A2 2 0 0 1 6 16.414l-1.707-1.707a1 1 0 0 1 0-1.414L6 11.586A2 2 0 0 1 7.414 11H11v-1h-1a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1V3a1 1 0 0 1 1-1m2 11H7.414l-1 1 1 1H14zm2.586-7H10v2h6.586l1-1z", size: size, color: color, gradient: gradient }));
}
