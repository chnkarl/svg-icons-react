import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function ThermometerLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M12 2a3 3 0 0 1 2.995 2.824L15 5v7.956l.01.021a.34.34 0 0 0 .087.097 5 5 0 1 1-6.193 0 .385.385 0 0 0 .068-.069l.028-.05V5a3 3 0 0 1 3-3Zm0 2a1 1 0 0 0-.993.883L11 5v7.958c0 .675-.337 1.226-.744 1.59l-.113.096a3 3 0 1 0 3.86.123l-.146-.123c-.418-.33-.79-.853-.849-1.505L13 12.96V5a1 1 0 0 0-1-1Zm2 13a2 2 0 0 1-3.99.196L10 17h4Z", size: size, color: color, gradient: gradient }));
}
