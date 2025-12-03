import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function ProjectorScreenLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M20 2a1 1 0 0 1 .993.883L21 3v3a1 1 0 0 1-.883.993L20 7h-1v7h1a1 1 0 0 1 .117 1.993L20 16h-7v1.208a2.5 2.5 0 1 1-2.153.073l.153-.073V16H4a1 1 0 0 1-.117-1.993L4 14h1V7H4a1 1 0 0 1-.993-.883L3 6V3a1 1 0 0 1 .883-.993L4 2zm-8 17a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m5-12H7v7h10zm2-3H5v1h14z", size: size, color: color, gradient: gradient }));
}
