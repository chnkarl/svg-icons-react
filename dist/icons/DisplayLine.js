import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function DisplayLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h14Zm0 2H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Zm-8.293 2.293a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0Zm-4.414-1a1 1 0 0 1 1.497 1.32l-.083.094-1 1a1 1 0 0 1-1.497-1.32l.083-.094 1-1Z", size: size, color: color, gradient: gradient }));
}
