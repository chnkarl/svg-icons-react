import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function PicLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M20 3a2 2 0 0 1 1.995 1.85L22 5v14a2 2 0 0 1-1.85 1.995L20 21H4a2 2 0 0 1-1.995-1.85L2 19V5a2 2 0 0 1 1.85-1.995L4 3h16ZM9.879 12.05l-5.657 5.657a1.002 1.002 0 0 1-.222.168V19h16v-1.125a1 1 0 0 1-.222-.168L16.95 14.88l-.707.707.207.207a1 1 0 0 1-1.415 1.414L9.88 12.05ZM20 5H4v10.1l4.995-4.994a1.25 1.25 0 0 1 1.666-.091l.101.09 4.066 4.067 1.238-1.238a1.25 1.25 0 0 1 1.666-.091l.102.091L20 15.101V5Zm-4.5 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z", size: size, color: color, gradient: gradient }));
}
