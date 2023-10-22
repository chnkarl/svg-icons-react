import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function TrafficLightsLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M14 2a4 4 0 0 1 3.995 3.8L18 6v12a4 4 0 0 1-3.8 3.995L14 22h-4a4 4 0 0 1-3.995-3.8L6 18V6a4 4 0 0 1 3.8-3.995L10 2h4Zm0 2h-4a2 2 0 0 0-1.995 1.85L8 6v12a2 2 0 0 0 1.85 1.995L10 20h4a2 2 0 0 0 1.995-1.85L16 18V6a2 2 0 0 0-2-2Zm-2 11a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0-5a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0-5a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z", size: size, color: color, gradient: gradient }));
}
