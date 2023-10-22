import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function PdfLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M13.586 2a2 2 0 0 1 1.284.467l.13.119L19.414 7a2 2 0 0 1 .578 1.238l.008.176V20a2 2 0 0 1-1.85 1.995L18 22H6a2 2 0 0 1-1.995-1.85L4 20V4a2 2 0 0 1 1.85-1.995L6 2h7.586ZM12 4H6v16h12V10h-4.5a1.5 1.5 0 0 1-1.493-1.356L12 8.5V4Zm.988 7.848a6.223 6.223 0 0 0 2.235 3.872c.887.717.076 2.121-.988 1.712a6.223 6.223 0 0 0-4.47 0c-1.065.41-1.876-.995-.989-1.712a6.222 6.222 0 0 0 2.235-3.872c.178-1.127 1.8-1.126 1.977 0Zm-.99 2.304-.688 1.196h1.38l-.691-1.196ZM14 4.414V8h3.586L14 4.414Z", size: size, color: color, gradient: gradient }));
}
