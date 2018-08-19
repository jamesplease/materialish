## Usage

```jsx
import { IconButton } from 'materialish';
import 'materialish/materialish.css';
```

## Props

| Prop Name | Default Value | Description                                                                                        |
| --------- | ------------- | -------------------------------------------------------------------------------------------------- |
| children  |               | The contents that are rendered                                                                     |
| className |               | Additional class name(s) to add to the Button                                                      |
| ripple    | true          | Whether or not to display the "ripple" effect                                                      |
| nodeRef   |               | Pass a [ref](https://reactjs.org/docs/refs-and-the-dom.html) to get access to the `button` element |
| ...rest   |               | Other props are placed on the underlying `button` element                                          |

## CSS Variables

| Variable                      | Default Value       | Description                                              |
| ----------------------------- | ------------------- | -------------------------------------------------------- |
| --mt-baseFontSize             | 1rem                | The dimensions of the button are based off of this value |
| --mt-iconButton-color         | #6d6c6c             | The color to use for the icon and ripple                 |
| --mt-iconButton-disabledColor | rgba(0, 0, 0, 0.38) | The color to use when the button is disabled             |
