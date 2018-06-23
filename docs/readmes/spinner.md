## Usage

```jsx
import { Spinner } from 'materialish';
import 'materialish/materialish.css';
```

## Props

| Prop Name | Default Value                               | Required | Description                                               |
| --------- | ------------------------------------------- | -------- | --------------------------------------------------------- |
| size      | "calc(var(--mt-baseFontSize, 1rem) \* 1.5)" | No       | The size of the Spinner                                   |
| className |                                             | No       | Additional class name(s) to add to the root `svg` element |
| ...rest   |                                             | No       | Other props are placed on the root `svg` element          |

## CSS Variables

| Variable          | Default Value | Description                                        |
| ----------------- | ------------- | -------------------------------------------------- |
| --mt-baseFontSize | 1rem          | The size of the Spinner is based off of this value |
| --mt-spinnerColor |               | Provide a color for a monochrome spinner           |
