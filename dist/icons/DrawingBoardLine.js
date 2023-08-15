import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function DrawingBoardLine({ color, size, fillRule, }) {
    return (_jsx(Layout, { icon: "M12 3a1 1 0 0 1 1 1v1h8a1 1 0 1 1 0 2v9a1 1 0 1 1 0 2h-4.586l1.293 1.293a1 1 0 0 1-1.414 1.414L13.586 18h-3.172l-2.707 2.707a1 1 0 0 1-1.414-1.414L7.586 18H3a1 1 0 1 1 0-2V7a1 1 0 0 1 0-2h8V4a1 1 0 0 1 1-1Zm7 13V7H5v9h14Z", size: size, color: color, fillRule: fillRule }));
}
