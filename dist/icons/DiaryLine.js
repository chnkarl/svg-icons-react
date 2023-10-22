import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function DiaryLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M18 2a2 2 0 0 1 1.995 1.85L20 4v16a2 2 0 0 1-1.85 1.995L18 22H6a2 2 0 0 1-1.995-1.85L4 20v-1a1 1 0 0 1-.117-1.993L4 17v-2a1 1 0 0 1-.117-1.993L4 13v-2a1 1 0 0 1-.117-1.993L4 9V7a1 1 0 0 1-.117-1.993L4 5V4a2 2 0 0 1 1.85-1.995L6 2h12Zm0 2H6v16h12V4Zm-2.5 2a1.5 1.5 0 0 1 1.493 1.356L17 7.5v2a1.5 1.5 0 0 1-1.356 1.493L15.5 11h-7a1.5 1.5 0 0 1-1.493-1.356L7 9.5v-2a1.5 1.5 0 0 1 1.356-1.493L8.5 6h7ZM15 8H9v1h6V8Z", size: size, color: color, gradient: gradient }));
}
