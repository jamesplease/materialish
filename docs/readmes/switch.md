## Usage

```jsx
import { Switch } from 'materialish';
import 'materialish/materialish.css';
```

## Props

| Prop Name | Default Value | Required | Description                                              |
| --------- | ------------- | -------- | -------------------------------------------------------- |
| className |               | No       | Additional class name(s) to add to the Switch            |
| style     |               | No       | Inline styles to add to the root element of the Switch   |
| ...rest   |               | No       | Other props are placed on the underlying `input` element |

## CSS Variables

| Variable                            | Default Value           | Description                                             |
| ----------------------------------- | ----------------------- | ------------------------------------------------------- |
| --mt-baseFontSize                   | 1rem                    | The size of the switch is based off of this value       |
| --mt-switch-backgroundColor         | #979696                 | The color of the switch's bar                           |
| --mt-switch-backgroundColorActive   | #b0cfe9                 | The color of the switch's bar when it is active         |
| --mt-switch-backgroundColorDisabled | #d9d9d9                 | The color of the switch's bar when it is disabled       |
| --mt-switch-knobColor               | #fafafa                 | The color of the switch's knob                          |
| --mt-switch-knobColorActive         | --mt-mainColor, #2196f3 | The color of the switch's knob when it is active        |
| --mt-switch-knobColorDisabled       | #979696                 | The color of the switch's knob when it is disabled      |
| --mt-switch-focusColor              | #979696                 | The color of the focused circle layer                   |
| --mt-switch-focusColorActive        | --mt-mainColor, #2196f3 | The color of the focused circle layer when it is active |
