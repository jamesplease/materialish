## Usage

```jsx
import { Button } from 'materialish';
import 'materialish/button.css';
import 'materialish/ripple.css';
```

## Props

| Prop Name | Default Value | Required | Description                                               |
| --------- | ------------- | -------- | --------------------------------------------------------- |
| children  |               | No       | The contents that are rendered                            |
| className |               | No       | Additional class name(s) to add to the Button             |
| ripple    | true          | No       | Whether or not to display the "ripple" effect             |
| flat      | false         | No       | Pass `true` to remove the button's background color       |
| raised    | false         | No       | Whether or not to display a drop shadow                   |
| stroked   | false         | No       | Pass `true` to render as an outline button                |
| ...rest   |               | No       | Other props are placed on the underlying `button` element |

## CSS Variables

| Variable                      | Default Value       | Description                                                            |
| ----------------------------- | ------------------- | ---------------------------------------------------------------------- |
| --mt-baseFontSize             | 1rem                | The text size and dimensions of the button are based off of this value |
| --mt-button-backgroundColor   | #2196f3             | The background color of primary buttons                                |
| --mt-button-textColor         | #fff                | The foreground color of primary buttons                                |
| --mt-button-disabledTextColor | rgba(0, 0, 0, 0.38) | The color of disabled buttons                                          |
