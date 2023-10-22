import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function CopperCoinLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-1.414 3.757a2 2 0 0 1 2.701-.116l.127.116 2.829 2.829a2 2 0 0 1 .116 2.701l-.116.127-2.829 2.829a2 2 0 0 1-2.701.116l-.127-.116-2.829-2.829a2 2 0 0 1-.116-2.701l.116-.127 2.829-2.829ZM12 9.172 9.172 12 12 14.828 14.828 12 12 9.172Z", size: size, color: color, gradient: gradient }));
}
