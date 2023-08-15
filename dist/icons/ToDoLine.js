import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function ToDoLine({ color, size, fillRule, }) {
    return (_jsx(Layout, { icon: "M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6h-2V4H6v16h5v2H6a2 2 0 0 1-2-2V4Zm4 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm9 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm5-2.5a1 1 0 0 1 1 1v.5a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1Z", size: size, color: color, fillRule: fillRule }));
}
