svg-icons-react
---

## Install
```
npm i svg-icons-react
```

![image](./gradient.png)

## Follow mingcute icons, latest version v2.90（2670 icons）

## Basic Usage
```
import { CalendarMonthFill } from 'svg-icons-react'

<CalendarMonthFill size="24" color="#0066ff" />
```
## Gradient Usage
```
const colorGradient = {
  from: { x: 0, y: 0 },
  to: { x: 0, y: 1 },
  steps: [
    {
      offset: 0, // 0 <= offset <= 100
      color: "#ff0000",
      opacity: 100
    },
    {
      offset: 25, // 0 <= offset <= 100
      color: "yellow",
      opacity: 100
    },
    {
      offset: 50, // 0 <= offset <= 100
      color: 'purple',
      opacity: 100
    },
    {
      offset: 80, // 0 <= offset <= 100
      color: "cyan",
      opacity: 100
    }
  ]
}

<CalendarMonthFill size="24" gradient={colorGradient} />
```

## from & to rule
```
[0,0]------[1,0]
  |          |
  |          |
  |          |
[0,1]------[1,1]

```

## Steps

open website [https://www.mingcute.com](https://www.mingcute.com) find a icon you want to use in you code, then figure out the name of icon, which almost like `calendar_month_fill`, you need to replace underline to uppercase include first character, e.g: 

calendar_month_fill -> CalendarMonthFill

then use `<CalendarMonthFill size="24" color="#0066ff" />`

## Icons Resourese

[https://www.mingcute.com](https://www.mingcute.com)
