## Usage

```jsx
import { ActionChip } from 'materialish';
import 'materialish/materialish.css';
```

## Props

| Prop Name | Default Value | Description                                    |
| --------- | ------------- | ---------------------------------------------- |
| children  |               | The contents that are rendered within the chip |
| className |               | Additional class name(s) to add to the chip    |
| ripple    | true          | Whether or not to display the "ripple" effect  |
| ...rest   |               | Other props are placed on the root element     |

## CSS Variables

| Variable                             | Default Value          | Description                                                          |
| ------------------------------------ | ---------------------- | -------------------------------------------------------------------- |
| --mt-baseFontSize                    | 1rem                   | The text size and dimensions of the chip are based off of this value |
| --mt-fontFamily                      | 'Roboto'               | The font family to use for the chip text                             |
| --mt-mainColor                       | #2196f3                | The colors of the chip will be based off of this value               |
| --mt-chip-backgroundColor            | #e0dfe0                | The background color of the chip                                     |
| --mt-chip-backgroundColorFocus       | rgb(51, 51, 51, 0.2)   | The background color of the chip when it is focused                  |
| --mt-chip-backgroundColorActive      | rgb(33, 150, 243, 0.2) | The background color of the chip when is active                      |
| --mt-chip-backgroundColorActiveFocus | --mt-mainColor         | The background color of the chip when it active and focused          |
| --mt-chip-textColor                  | #212121                | The text color for the chip                                          |
| --mt-chip-textColorActive            | --mt-mainColor         | The text color for the active chip                                   |
