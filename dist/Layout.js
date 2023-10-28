import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import cloneDeep from 'lodash.clonedeep';
import { Init } from './init';
const init = cloneDeep(Init);
export default function Layout({ icon = init.icon, color, gradient, size = init.size, }) {
    const elementId = Date.now().toString(36) + Math.random().toString(36).slice(2);
    const getGradient = () => {
        let initGradient = cloneDeep(init.gradient);
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
    const [_gradient, set_gradient] = useState(cloneDeep(init.gradient));
    useEffect(() => {
        set_gradient(getGradient());
    }, [color, gradient]);
    return (_jsxs("svg", { width: `${size}px`, height: `${size}px`, viewBox: "0 0 24 24", fill: `url(#${elementId}`, fillRule: "evenodd", children: [_jsx("defs", { children: _jsx("linearGradient", { id: elementId, x1: _gradient.from.x, y1: _gradient.from.y, x2: _gradient.to.x, y2: _gradient.to.y, children: _gradient.steps.map((item, i) => {
                        return (_jsx("stop", { offset: `${item.offset}%`, stopColor: item.color, stopOpacity: `${item.opacity}%` }, i));
                    }) }) }), _jsx("path", { d: icon })] }));
}
