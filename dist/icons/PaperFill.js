import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function PaperFill({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M16 3a3 3 0 0 1 2.995 2.824L19 6v10h.75c.647 0 1.18.492 1.244 1.122l.006.128V19a3 3 0 0 1-2.824 2.995L18 22H8a3 3 0 0 1-2.995-2.824L5 19V9H3.25a1.25 1.25 0 0 1-1.244-1.122L2 7.75V6a3 3 0 0 1 2.824-2.995L5 3h11Zm3 15h-9v1c0 .35-.06.687-.17 1H18a1 1 0 0 0 1-1v-1Zm-7-6h-2a1 1 0 0 0-.117 1.993L10 14h2a1 1 0 0 0 .117-1.993L12 12Zm2-4h-4a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2ZM5 5a1 1 0 0 0-1 1v1h1V5Z", size: size, color: color, gradient: gradient }));
}
