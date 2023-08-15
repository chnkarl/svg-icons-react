import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function CompassLine({ color, size, fillRule, }) {
    return (_jsx(Layout, { icon: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm4.95 3.05c.395.396.397.98.336 1.51l-.037.283c-.16 1.12-.605 2.775-1.242 4.156-.31.672-.7 1.351-1.179 1.83-.478.477-1.156.868-1.83 1.178-1.38.637-3.035 1.082-4.155 1.242l-.282.037c-.53.06-1.118.056-1.51-.336-.357-.357-.393-.875-.351-1.365l.032-.29.019-.138c.16-1.12.605-2.775 1.242-4.156.31-.672.7-1.351 1.179-1.83.478-.478 1.157-.868 1.83-1.178 1.38-.637 3.035-1.082 4.155-1.242l.282-.037c.53-.06 1.115-.06 1.51.336Zm-1.712 1.712c-.908.155-2.323.55-3.4 1.047-.597.276-1.023.548-1.252.777-.23.229-.501.655-.777 1.252-.496 1.077-.892 2.492-1.047 3.4.908-.155 2.323-.55 3.4-1.047.597-.276 1.023-.548 1.252-.777.23-.229.502-.655.777-1.252.496-1.077.893-2.492 1.047-3.4ZM12 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z", size: size, color: color, fillRule: fillRule }));
}