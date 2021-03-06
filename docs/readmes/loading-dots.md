## Usage

```jsx
import { LoadingDots } from 'materialish';
import 'materialish/materialish.css';
```

## Props

| Prop Name | Default Value                                 | Description                                                                                 |
| --------- | --------------------------------------------- | ------------------------------------------------------------------------------------------- |
| size      | "calc(var(--mt-baseFontSize, 1rem) \* 1.125)" | The size of the LoadingDots                                                                 |
| nodeRef   |                                               | Pass a [ref](https://reactjs.org/docs/refs-and-the-dom.html) to get access to the root node |
| ...rest   |                                               | Other props are placed on the root `svg` element                                            |

## CSS Variables

| Variable                           | Default Value | Description                                                     |
| ---------------------------------- | ------------- | --------------------------------------------------------------- |
| --mt-baseFontSize                  | 1rem          | The size of the LoadingDots is based off of this value          |
| --mt-loadingDots-animationDuration | 300ms         | The length of time it takes the animation to complete one cycle |
