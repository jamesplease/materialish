## Usage

```jsx
import { IconButton } from 'materialish';
import 'materialish/icon-button.css';
import 'materialish/ripple.css';
```

## Props

| Prop Name | Default Value | Required | Description                                               |
| --------- | ------------- | -------- | --------------------------------------------------------- |
| children  |               | No       | The contents that are rendered                            |
| className |               | No       | Additional class name(s) to add to the Button             |
| ripple    | true          | No       | Whether or not to display the "ripple" effect             |
| ...rest   |               | No       | Other props are placed on the underlying `button` element |

## CSS Variables

| Variable                      | Default Value       | Description                                              |
| ----------------------------- | ------------------- | -------------------------------------------------------- |
| --mt-baseFontSize             | 1rem                | The dimensions of the button are based off of this value |
| --mt-iconButton-color         | #6d6c6c             | The color to use for the icon and ripple                 |
| --mt-iconButton-disabledColor | rgba(0, 0, 0, 0.38) | The color to use when the button is disabled             |
