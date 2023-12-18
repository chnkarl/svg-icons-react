import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function AirConditionLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M19 6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3zm0 2H5a1 1 0 0 0-.993.883L4 9v6a1 1 0 0 0 .883.993L5 16v-2a1 1 0 0 1 .883-.993L6 13h12a1 1 0 0 1 .993.883L19 14v2a1 1 0 0 0 .993-.883L20 15V9a1 1 0 0 0-.883-.993zm-2 7H7v1h10zm0-6a1 1 0 1 1 0 2 1 1 0 0 1 0-2", size: size, color: color, gradient: gradient }));
}
