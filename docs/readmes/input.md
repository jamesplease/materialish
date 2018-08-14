## Usage

```jsx
import { Input } from 'materialish';
import 'materialish/materialish.css';
```

## Props

| Prop Name | Default Value | Description                                                                                       |
| --------- | ------------- | ------------------------------------------------------------------------------------------------- |
| className |               | Additional class name(s) to add to the input                                                      |
| error     | false         | Whether or not the input is in an invalid state                                                   |
| nodeRef   |               | Pass a [ref](https://reactjs.org/docs/refs-and-the-dom.html) to get access to the `input` element |
| ...rest   |               | Other props are placed on the root `input` element                                                |

## CSS Variables

| Variable                    | Default Value           | Description                                                           |
| --------------------------- | ----------------------- | --------------------------------------------------------------------- |
| --mt-baseFontSize           | 1rem                    | The text size and dimensions of the input are based off of this value |
| --mt-fontFamily             | 'Roboto'                | The font family to use for the input text                             |
| --mt-input-focusBorderColor | --mt-mainColor, #4a8fe2 | The border color to use when the input is focused                     |
