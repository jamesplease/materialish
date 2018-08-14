## Usage

```jsx
import { Button } from 'materialish';
import 'materialish/materialish.css';
```

## Props

| Prop Name | Default Value | Description                                               |
| --------- | ------------- | --------------------------------------------------------- |
| children  |               | The contents that are rendered                            |
| className |               | Additional class name(s) to add to the Button             |
| ripple    | true          | Whether or not to display the "ripple" effect             |
| flat      | false         | Pass `true` to remove the button's background color       |
| raised    | false         | Whether or not to display a drop shadow                   |
| stroked   | false         | Pass `true` to render as an outline button                |
| ...rest   |               | Other props are placed on the underlying `button` element |

## CSS Variables

| Variable                      | Default Value           | Description                                                            |
| ----------------------------- | ----------------------- | ---------------------------------------------------------------------- |
| --mt-baseFontSize             | 1rem                    | The text size and dimensions of the button are based off of this value |
| --mt-fontFamily               | 'Roboto'                | The font family to use for the button text                             |
| --mt-button-backgroundColor   | --mt-mainColor, #2196f3 | The background color of primary buttons                                |
| --mt-button-textColor         | #fff                    | The foreground color of primary buttons                                |
| --mt-button-disabledTextColor | rgba(0, 0, 0, 0.38)     | The color of disabled buttons                                          |
