import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function TaskLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M15 2a2 2 0 0 1 1.732 1H18a2 2 0 0 1 2 2v12a5 5 0 0 1-5 5H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h1.268A2 2 0 0 1 9 2zM7 5H6v15h9a3 3 0 0 0 3-3V5h-1a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2m9.238 4.379a1 1 0 0 1 0 1.414l-4.95 4.95a1 1 0 0 1-1.414 0l-2.12-2.122a1 1 0 0 1 1.413-1.414l1.415 1.414 4.242-4.242a1 1 0 0 1 1.414 0M15 4H9v1h6z", size: size, color: color, gradient: gradient }));
}
