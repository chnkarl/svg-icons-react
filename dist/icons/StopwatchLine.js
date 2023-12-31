import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function StopwatchLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M12 2c.937 0 1.85.108 2.726.311a1 1 0 1 1-.452 1.948 9.982 9.982 0 0 0-1.499-.23l-.074-.002a8.95 8.95 0 0 1 4.341 1.517l.606-.606a1 1 0 1 1 1.415 1.414l-.495.495a9 9 0 1 1-7.16-2.827l-.136.006a9.948 9.948 0 0 0-1.546.233 1 1 0 0 1-.452-1.948C10.15 2.108 11.064 2 12 2m0 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14m0 2a1 1 0 0 1 .993.883L13 9v4a1 1 0 0 1-1.993.117L11 13V9a1 1 0 0 1 1-1", size: size, color: color, gradient: gradient }));
}
