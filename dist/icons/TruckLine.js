import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function TruckLine({ color, size, fillRule, }) {
    return (_jsx(Layout, { icon: "M15 4a2 2 0 0 1 2 2v1h1.52a2 2 0 0 1 1.561.75l1.48 1.851a2 2 0 0 1 .439 1.25V15a2 2 0 0 1-2 2 3 3 0 1 1-6 0h-4a3 3 0 1 1-6 0 2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11ZM7 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM15 6H4v9h.764c.55-.614 1.348-1 2.236-1 .82 0 1.563.33 2.105.862l.131.138h5.528l.115-.121.121-.115V6Zm3.52 3H17v5c.82 0 1.563.33 2.105.862l.131.138H20v-4.15L18.52 9Z", size: size, color: color, fillRule: fillRule }));
}