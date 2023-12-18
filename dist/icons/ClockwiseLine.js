import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function ClockwiseLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M20 8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2zm0 2H10v9h10zm-8.944-7c.683 0 .975.517 1.067.84l.029.132c.04.285-.026 1.002-.76 1.233l-.402.132c-.934.321-2.257.875-3.534 1.743-1.474 1-2.833 2.383-3.516 4.262a1 1 0 1 1-1.88-.684c.872-2.397 2.578-4.082 4.272-5.232l.332-.22L6.995 5H6a1 1 0 0 1-.117-1.993L6 3z", size: size, color: color, gradient: gradient }));
}
