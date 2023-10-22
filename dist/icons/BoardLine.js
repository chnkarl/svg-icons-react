import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function BoardLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M14 3a2 2 0 0 1 1.995 1.85L16 5v1.055l3.641.976a2 2 0 0 1 1.448 2.304l-.034.145-2.588 9.66a2 2 0 0 1-2.304 1.447l-.145-.033-.587-.157c-.322.33-.759.55-1.246.595L14 21H5a2 2 0 0 1-1.995-1.85L3 19V5a2 2 0 0 1 1.85-1.995L5 3h9Zm0 2H5v14h9V5Zm2 3.126v10.353l.535.143 2.589-9.66L16 8.127Z", size: size, color: color, gradient: gradient }));
}
