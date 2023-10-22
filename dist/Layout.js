import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
const init = {
    icon: "M21 8v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8h18ZM8.5 15h-1a1 1 0 0 0-.117 1.993L7.5 17h1a1 1 0 0 0 .117-1.993L8.5 15Zm4 0h-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2Zm-4-4h-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2Zm4 0h-1a1 1 0 0 0-.117 1.993L11.5 13h1a1 1 0 0 0 .117-1.993L12.5 11Zm4 0h-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2ZM19 3a2 2 0 0 1 2 2v1H3V5a2 2 0 0 1 2-2h14Z",
    color: "#000000",
    size: 16,
    gradient: {
        from: { x: 0, y: 0 },
        to: { x: 0, y: 1 },
        steps: [
            {
                offset: 0,
                color: '#000000',
                opacity: 100,
            },
            {
                offset: 100,
                color: '#000000',
                opacity: 100,
            }
        ]
    }
};
export default function Layout({ icon = init.icon, color, gradient, size = init.size, }) {
    const elementId = Date.now().toString(36) + Math.random().toString(36).slice(2);
    const getGradient = () => {
        let initGradient = { ...init.gradient };
        if (typeof gradient !== "undefined" && gradient) {
            // gradient 存在就用 gradient 颜色
            initGradient = { ...gradient };
        }
        else if (typeof color !== "undefined" && color) {
            // color 存在就用 color 颜色
            initGradient.steps[0].color = color;
            initGradient.steps[1].color = color;
        }
        else {
            console.warn('one of parameters color and gradient is required');
        }
        return initGradient;
    };
    const [_gradient, set_gradient] = useState(init.gradient);
    useEffect(() => {
        set_gradient(getGradient());
    }, [color, gradient]);
    return (_jsxs("svg", { width: `${size}px`, height: `${size}px`, viewBox: "0 0 24 24", fill: `url(#${elementId}`, fillRule: "evenodd", children: [_jsx("defs", { children: _jsx("linearGradient", { id: elementId, x1: _gradient.from.x, y1: _gradient.from.y, x2: _gradient.to.x, y2: _gradient.to.y, children: _gradient.steps.map((item, i) => {
                        return (_jsx("stop", { offset: `${item.offset}%`, stopColor: item.color, stopOpacity: `${item.opacity}%` }, i));
                    }) }) }), _jsx("path", { d: icon })] }));
}
