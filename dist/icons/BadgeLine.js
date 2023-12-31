import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function BadgeLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M14.447 1.106a1 1 0 0 1 .447 1.341L14.118 4H18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3.882l-.776-1.553a1 1 0 0 1 1.788-.894L12 3.763l1.106-2.21a1 1 0 0 1 1.341-.447M10.882 6H6v14h12V6h-5a1 1 0 0 1-1.894.447zm2.618 8a2.5 2.5 0 0 1 2.5 2.5v.5a1 1 0 1 1-2 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.5a1 1 0 1 1-2 0v-.5a2.5 2.5 0 0 1 2.5-2.5zM12 9a2 2 0 1 1 0 4 2 2 0 0 1 0-4", size: size, color: color, gradient: gradient }));
}
