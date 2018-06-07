## Usage

```jsx
import { Dialog } from 'materialish';
import 'materialish/dialog.css';
```

Take note of the fact that a dialog is made up of several components. To see how they
are used together, refer to the example above.

## Props

All of the components of a dialog receive the same props.

| Prop Name | Default Value | Required | Description                                                        |
| --------- | ------------- | -------- | ------------------------------------------------------------------ |
| className |               | No       | Additional class name(s) to add to the dialog component            |
| ...rest   |               | No       | Other props are placed on the root element of the dialog component |

## CSS Variables

These CSS variables should be applied to the `<Dialog/>` component, and not the sub-components.

| Variable          | Default Value | Description                                            |
| ----------------- | ------------- | ------------------------------------------------------ |
| --mt-baseFontSize | 1rem          | The text size of the dialog is based off of this value |
| --mt-fontFamily   | 'Roboto'      | The font family to use for text                        |