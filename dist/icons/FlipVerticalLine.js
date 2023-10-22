import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function FlipVerticalLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M12 2a1 1 0 0 1 1 1v18a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1ZM7.864 5.207C8.279 4.045 10 4.343 10 5.577V18.9A1.1 1.1 0 0 1 8.9 20H4.142a1.1 1.1 0 0 1-1.036-1.47L7.864 5.207ZM8 10.773 5.419 18H8v-7.227Zm6-5.196c0-1.234 1.72-1.532 2.136-.37l4.758 13.323A1.1 1.1 0 0 1 19.858 20H15.1a1.1 1.1 0 0 1-1.1-1.1V5.577ZM18.58 18 16 10.773V18h2.58Z", size: size, color: color, gradient: gradient }));
}
