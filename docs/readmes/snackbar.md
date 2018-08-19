## Usage

```jsx
import { Snackbar } from 'materialish';
import 'materialish/materialish.css';
```

Note that Snackbars are frequently used with [Buttons](/components/button).

## Props

| Prop Name | Default Value | Description                                                                                 |
| --------- | ------------- | ------------------------------------------------------------------------------------------- |
| className |               | Additional class name(s) to add to the snackbar                                             |
| nodeRef   |               | Pass a [ref](https://reactjs.org/docs/refs-and-the-dom.html) to get access to the root node |
| ...rest   |               | Other props are placed on the root element                                                  |

## CSS Variables

| Variable          | Default Value | Description                                                             |
| ----------------- | ------------- | ----------------------------------------------------------------------- |
| --mt-baseFontSize | 1rem          | The text size and dimensions of the snackbar is based off of this value |
| --mt-fontFamily   | 'Roboto'      | The font family to use for text                                         |
