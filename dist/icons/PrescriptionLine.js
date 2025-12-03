import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function PrescriptionLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M5 5a2 2 0 0 1 2-2h4.5a4.5 4.5 0 1 1 0 9h-.086L15 15.586l2.293-2.293a1 1 0 0 1 1.414 1.414L16.414 17l2.293 2.293a1 1 0 0 1-1.414 1.414L15 18.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L13.586 17l-5-5H7v5a1 1 0 1 1-2 0zm2 5h4.5a2.5 2.5 0 0 0 0-5H7z", size: size, color: color, gradient: gradient }));
}
