import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function TrelloBoardLine({ color, size, fillRule, }) {
    return (_jsx(Layout, { icon: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm0 2H5v14h14V5Zm-9 1a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 10 17H7.5A1.5 1.5 0 0 1 6 15.5v-8A1.5 1.5 0 0 1 7.5 6H10Zm-.5 2H8v7h1.5V8Zm7-2a1.5 1.5 0 0 1 1.493 1.356L18 7.5v3a1.5 1.5 0 0 1-1.356 1.493L16.5 12H14a1.5 1.5 0 0 1-1.493-1.356L12.5 10.5v-3a1.5 1.5 0 0 1 1.356-1.493L14 6h2.5ZM16 8h-1.5v2H16V8Z", size: size, color: color, fillRule: fillRule }));
}
