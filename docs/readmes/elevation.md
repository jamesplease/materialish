## Usage

```jsx
import { Elevation } from 'materialish';
import 'materialish/elevation.css';
```

## Props

| Prop Name | Default Value | Required | Description                                                                             |
| --------- | ------------- | -------- | --------------------------------------------------------------------------------------- |
| className |               | No       | Additional class name(s) to add to the elevation                                        |
| depth     | 1             | No       | A value between 0 and 5 that represents how far from the page the element should appear |
| ...rest   |               | No       | Other props are placed on the root element of the elevation                             |

## CSS Variables

| Variable          | Default Value | Description                           |
| ----------------- | ------------- | ------------------------------------- |
| --mt-baseFontSize | 1rem          | The size of text within the elevation |
| --mt-fontFamily   | 'Roboto'      | The font family to use for text       |
