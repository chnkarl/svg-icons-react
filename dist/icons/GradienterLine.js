import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function GradienterLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M4.455 9.333a8.004 8.004 0 0 1 15.09 0 1 1 0 0 0 1.886-.666C20.058 4.784 16.356 2 12 2 7.643 2 3.94 4.784 2.568 8.667a1 1 0 1 0 1.886.666Zm0 5.334a1 1 0 1 0-1.886.666C3.942 19.216 7.644 22 12 22c4.356 0 8.058-2.784 9.43-6.667a1 1 0 1 0-1.885-.666 8.004 8.004 0 0 1-15.09 0M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M2 12a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m13 0a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1", size: size, color: color, gradient: gradient }));
}
