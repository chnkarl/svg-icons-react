import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function DirectionArrowLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm10 4.586-.293-.293a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414 0l1-1a1 1 0 0 0-1.414-1.414l-.293.293Zm-4.293-4.879L7.414 12l.293.293a1 1 0 1 1-1.414 1.414l-1-1a1 1 0 0 1 0-1.414l1-1a1 1 0 1 1 1.414 1.414ZM12 7.414l-.293.293a1 1 0 1 1-1.414-1.414l1-1a1 1 0 0 1 1.414 0l1 1a1 1 0 0 1-1.414 1.414L12 7.414Zm5.707 2.879 1 1a1 1 0 0 1 0 1.414l-1 1a1 1 0 0 1-1.414-1.414l.293-.293-.293-.293a1 1 0 0 1 1.414-1.414Z", size: size, color: color, gradient: gradient }));
}
