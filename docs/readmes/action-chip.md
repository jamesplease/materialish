## Usage

```jsx
import { Button } from 'materialish';
import 'materialish/chip.css';
import 'materialish/ripple.css';
```

## Props

| Prop Name | Default Value | Required | Description                                              |
| --------- | ------------- | -------- | -------------------------------------------------------- |
| children  |               | No       | The contents that are rendered                           |
| className |               | No       | Additional class name(s) to add to the Action Chip       |
| ripple    | true          | No       | Whether or not to display the "ripple" effect            |
| ...rest   |               | No       | Other props are placed on the underlying `input` element |

## CSS Variables

| Variable                       | Default Value | Description                                                          |
| ------------------------------ | ------------- | -------------------------------------------------------------------- |
| --mt-baseFontSize              | 1rem          | The text size and dimensions of the chip are based off of this value |
| --mt-fontFamily                | 'Roboto'      | The font family to use for the chip text                             |
| --mt-chip-backgroundColor      | #e0dfe0       | The background color of the chip                                     |
| --mt-chip-backgroundColorFocus | #333          | The background color of the chip when is focused                     |
