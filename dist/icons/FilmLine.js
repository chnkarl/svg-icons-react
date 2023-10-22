import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function FilmLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M20 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16Zm-4 2H8v14h8V5Zm4 12h-2v2h2v-2ZM6 17H4v2h2v-2Zm14-4h-2v2h2v-2ZM6 13H4v2h2v-2Zm14-4h-2v2h2V9ZM6 9H4v2h2V9Zm14-4h-2v2h2V5ZM6 5H4v2h2V5Z", size: size, color: color, gradient: gradient }));
}
