## Usage

```jsx
import { Radio } from 'materialish';
import 'materialish/materialish.css';
```

## Props

| Prop Name | Default Value | Description                                                                                    |
| --------- | ------------- | ---------------------------------------------------------------------------------------------- |
| className |               | Additional class name(s) to add to the Radio                                                   |
| style     |               | Inline styles to add to the root element of the Radio                                          |
| nodeRef   |               | Pass a [ref](https://reactjs.org/docs/refs-and-the-dom.html) to get access to the `input` node |
| ...rest   |               | Other props are placed on the underlying `input` element                                       |

## CSS Variables

| Variable                | Default Value           | Description                                      |
| ----------------------- | ----------------------- | ------------------------------------------------ |
| --mt-baseFontSize       | --mt-baseFontSize, 1rem | The size of the radio is based off of this value |
| --mt-radio-checkedColor | --mt-mainColor, #2196f3 | The color of the radio when it is checked        |
| --mt-radio-focusColor   | #e8e8e8                 | The color of the focused circle layer            |
