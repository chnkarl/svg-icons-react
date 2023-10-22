import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function MapPinLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M12 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM7 7a5 5 0 1 1 6 4.9V17a1 1 0 1 1-2 0v-5.1A5.002 5.002 0 0 1 7 7Zm2.489 9.1a1 1 0 0 1-.838 1.14c-1.278.194-2.293.489-2.96.815-1.22.597.206 1.026.95 1.258C7.968 19.728 9.863 20 12 20s4.032-.272 5.359-.687c.749-.234 2.17-.66.95-1.258-.667-.326-1.682-.62-2.96-.815a1 1 0 1 1 .301-1.977c1.388.21 2.622.547 3.539.996.884.433 1.811 1.162 1.811 2.241 0 .811-.524 1.4-1.034 1.777C17.816 21.865 14.536 22 12 22c-2.282 0-4.387-.288-5.955-.778C4.795 20.832 3 20.062 3 18.5c0-1.08.927-1.808 1.811-2.24.917-.45 2.152-.786 3.538-.997a1 1 0 0 1 1.14.838Z", size: size, color: color, gradient: gradient }));
}
