import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function CameraLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm11 2a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1m-7 5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-5a5 5 0 1 0 0 10 5 5 0 0 0 0-10", size: size, color: color, gradient: gradient }));
}
