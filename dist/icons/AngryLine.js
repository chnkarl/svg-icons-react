import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function AngryLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16m0 9c1.268 0 2.427.473 3.308 1.25a1 1 0 1 1-1.324 1.5A2.985 2.985 0 0 0 12 15c-.761 0-1.455.282-1.984.75a1 1 0 1 1-1.323-1.5A4.985 4.985 0 0 1 12 13M8.34 8.06l.107.046 2 1a1 1 0 0 1-.787 1.835l-.107-.047-2-1a1 1 0 0 1 .677-1.867l.11.032Zm7.213.046a1 1 0 0 1 .996 1.73l-.102.058-2 1a1 1 0 0 1-.996-1.73l.102-.058z", size: size, color: color, gradient: gradient }));
}
