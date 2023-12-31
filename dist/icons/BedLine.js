import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function BedLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M3 5a1 1 0 0 1 .993.883L4 6v7h7V8a1 1 0 0 1 .883-.993L12 7h7a3 3 0 0 1 2.995 2.824L22 10v8a1 1 0 0 1-1.993.117L20 18v-3H4v3a1 1 0 0 1-1.993.117L2 18V6a1 1 0 0 1 1-1m16 4h-6v4h7v-3a1 1 0 0 0-1-1M7.5 7a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m0 2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1", size: size, color: color, gradient: gradient }));
}
