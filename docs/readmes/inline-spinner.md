## Usage

```jsx
import { InlineSpinner } from 'materialish';
import 'materialish/materialish.css';
```

## Props

| Prop Name | Default Value                                 | Required | Description                                      |
| --------- | --------------------------------------------- | -------- | ------------------------------------------------ |
| size      | "calc(var(--mt-baseFontSize, 1rem) \* 1.125)" | No       | The size of the InlineSpinner                    |
| ...rest   |                                               | No       | Other props are placed on the root `svg` element |

## CSS Variables

| Variable                             | Default Value | Description                                                     |
| ------------------------------------ | ------------- | --------------------------------------------------------------- |
| --mt-baseFontSize                    | 1rem          | The size of the InlineSpinner is based off of this value        |
| --mt-inlineSpinner-animationDuration | 300ms         | The length of time it takes the animation to complete one cycle |
