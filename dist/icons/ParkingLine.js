import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function ParkingLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm1.5 3a3.5 3.5 0 0 1 .192 6.995L13.5 14H11v2a1 1 0 0 1-1.993.117L9 16V9a2 2 0 0 1 1.85-1.995L11 7h2.5Zm0 2H11v3h2.5a1.5 1.5 0 0 0 .144-2.993L13.5 9Z", size: size, color: color, gradient: gradient }));
}
