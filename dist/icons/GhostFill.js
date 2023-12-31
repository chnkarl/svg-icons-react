import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function GhostFill({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M12 2a9 9 0 0 1 9 9v8.62c0 1.83-1.966 2.987-3.565 2.099l-.363-.195c-1-.512-1.784-.68-2.889-.114l-.198.108a4 4 0 0 1-3.762.11l-.208-.11c-1.277-.73-2.166-.512-3.45.2-1.6.89-3.565-.267-3.565-2.097V11a9 9 0 0 1 9-9M8.5 9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m7 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3", size: size, color: color, gradient: gradient }));
}
