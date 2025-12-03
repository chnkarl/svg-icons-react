import { useEffect, useState } from "react"
import cloneDeep from "lodash.clonedeep"
import { Init, TypeInit } from "./init"

const init: TypeInit = cloneDeep(Init)

export default function Layout({
  icon = init.icon,
  color,
  gradient,
  size = init.size,
}: any) {
  const elementId =
    Date.now().toString(36) + Math.random().toString(36).slice(2)

  const getGradient = () => {
    let initGradient: any = cloneDeep(init.gradient)

    if (typeof gradient !== "undefined" && gradient) {
      // gradient 存在就用 gradient 颜色
      initGradient = { ...gradient }
    } else if (typeof color !== "undefined" && color) {
      // color 存在就用 color 颜色
      initGradient.steps[0].color = color
      initGradient.steps[1].color = color
    }

    return initGradient
  }

  const [_gradient, set_gradient] = useState<any>(cloneDeep(init.gradient))

  useEffect(() => {
    set_gradient(getGradient())
  }, [color, gradient])

  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 24 24"
      fill={`${gradient === undefined ? color : `url(#${elementId}`}`}
      fillRule="evenodd"
    >
      {gradient !== undefined ? (
        <defs>
          <linearGradient
            id={elementId}
            x1={_gradient.from.x}
            y1={_gradient.from.y}
            x2={_gradient.to.x}
            y2={_gradient.to.y}
          >
            {_gradient.steps.map((item: any, i: number) => {
              return (
                <stop
                  offset={`${item.offset}%`}
                  stopColor={item.color}
                  stopOpacity={`${item.opacity}%`}
                  key={i}
                />
              )
            })}
          </linearGradient>
        </defs>
      ) : null}
      <path d={icon}></path>
    </svg>
  )
}
