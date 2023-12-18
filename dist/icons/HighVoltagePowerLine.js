import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../Layout";
export default function HighVoltagePowerLine({ color, size, gradient }) {
    return (_jsx(Layout, { icon: "M4 9a1 1 0 0 1-.625-1.78l4.999-4A.998.998 0 0 1 9 3h6c.236 0 .454.082.627.22l4.998 4A1 1 0 0 1 20 9h-3.276l.253 1.77 2.972 8.914a1 1 0 1 1-1.898.632l-.626-1.878L12 14.305l-5.425 4.133-.626 1.878a1 1 0 0 1-1.898-.632l2.972-8.915L7.276 9zm3.698 6.068 2.652-2.02-1.578-1.202zm5.952-2.02 2.652 2.02-1.074-3.222zm1.148-3.39L12 11.79 9.202 9.658 9.296 9h5.408zM9.582 7h4.836l-.285-2H9.867zm-1.929-.642L7.561 7h-.71zm8.694 0L16.44 7h.71l-.802-.642Z", size: size, color: color, gradient: gradient }));
}
