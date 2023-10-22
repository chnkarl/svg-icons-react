import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function ColorFilterLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M12 2a6 6 0 0 1 5.58 8.21A6 6 0 1 1 12 20.472 6 6 0 1 1 6.42 10.21 6 6 0 0 1 12 2Zm4 10a3.984 3.984 0 0 0-2.75 1.095c.478.86.75 1.852.75 2.905a5.972 5.972 0 0 1-.75 2.906A4 4 0 1 0 16 12Zm-8.45.025a4 4 0 1 0 3.9 1.95 5.986 5.986 0 0 1-3.9-1.95ZM12 4a4 4 0 0 0-.45 7.975 5.989 5.989 0 0 1 3.9-1.95A4 4 0 0 0 12 4Z", size: size, color: color, gradient: gradient }));
}
