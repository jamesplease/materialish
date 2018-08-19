## Usage

```jsx
import { Spinner } from 'materialish';
import 'materialish/materialish.css';
```

## Props

| Prop Name | Default Value                               | Description                                                                                          |
| --------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| size      | "calc(var(--mt-baseFontSize, 1rem) \* 1.5)" | The size of the Spinner                                                                              |
| className |                                             | Additional class name(s) to add to the root `svg` element                                            |
| nodeRef   |                                             | Pass a [ref](https://reactjs.org/docs/refs-and-the-dom.html) to get access to the root `svg` element |
| ...rest   |                                             | Other props are placed on the root `svg` element                                                     |

## CSS Variables

| Variable          | Default Value | Description                                        |
| ----------------- | ------------- | -------------------------------------------------- |
| --mt-baseFontSize | 1rem          | The size of the Spinner is based off of this value |
| --mt-spinnerColor |               | Provide a color for a monochrome spinner           |
