## Usage

```jsx
import { ProgressBar } from 'materialish';
import 'materialish/materialish.css';
```

## Props

| Prop Name     | Default Value | Required | Description                                                                                               |
| ------------- | ------------- | -------- | --------------------------------------------------------------------------------------------------------- |
| loaded        | 0             | No       | How much has loaded; must be a number between 0 and 100. Only required when `indeterminate` is `false`.   |
| buffered      | 100           | No       | How much has buffered; must be a number between 0 and 100. Only required when `indeterminate` is `false`. |
| indeterminate | false         | No       | Pass `true` for this bar to represent an indeterminate process.                                           |
| ...rest       |               | No       | Other props are placed on the root element                                                                |

## CSS Variables

| Variable                         | Default Value                | Description                                                    |
| -------------------------------- | ---------------------------- | -------------------------------------------------------------- |
| --mt-baseFontSize                | 1rem                         | The dimensions of the progress bar are based off of this value |
| --mt-progressBar-backgroundColor | var(--mt-mainColor, #2196f3) | The color of the progress bar                                  |
