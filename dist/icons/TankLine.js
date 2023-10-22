import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function TankLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M7 7a3 3 0 0 1 3-3h1.53a5.002 5.002 0 0 1 4.584 3H20a1 1 0 1 1 0 2h-3.418l.285 2h.633a4.5 4.5 0 1 1 0 9h-11a4.5 4.5 0 1 1 0-9H7V7Zm7.5 1.576L14.848 11H9V7a1 1 0 0 1 1-1h1.53a3 3 0 0 1 2.97 2.576ZM6.5 13h11a2.5 2.5 0 0 1 0 5h-11a2.5 2.5 0 0 1 0-5Z", size: size, color: color, gradient: gradient }));
}
