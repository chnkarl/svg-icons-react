import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function WineglassLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M5.847 3.549A1.998 1.998 0 0 1 7.794 2h8.412c.93 0 1.738.642 1.947 1.549l1.023 4.431c.988 4.284-1.961 8.388-6.178 8.954A.97.97 0 0 1 13 17v3h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3v-3c0-.022 0-.044.002-.066-4.216-.566-7.166-4.67-6.177-8.954zM7.796 4 6.773 8.43C5.998 11.79 8.551 15 12 15c3.45 0 6.003-3.209 5.227-6.57L16.205 4h-8.41Z", size: size, color: color, gradient: gradient }));
}
