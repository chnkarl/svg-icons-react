import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function MarkPenLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m2.153 13H9.847l-.743 4.46A7.98 7.98 0 0 0 12 20c.894 0 1.753-.147 2.556-.417l.34-.123zM12 4a8 8 0 0 0-4.753 14.436l.627-3.765A2 2 0 0 1 9 13.188v-3.182c0-.382.216-.732.558-.903l3.98-1.99A1.01 1.01 0 0 1 15 8.016v5.172a2 2 0 0 1 1.126 1.483l.627 3.765A8 8 0 0 0 12 4m1 5.618-2 1V13h2z", size: size, color: color, gradient: gradient }));
}
