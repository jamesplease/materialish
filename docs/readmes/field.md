## Usage

```jsx
import { Field } from 'materialish';
import 'materialish/field.css';
import 'materialish/input.css';
```

# `Field`

## Props

| Prop Name | Default Value | Required | Description                                                        |
| --------- | ------------- | -------- | ------------------------------------------------------------------ |
| className |               | No       | Additional class name(s) to add to the menu item                   |
| required  | false         | No       | Whether or not the value that this field represents is required    |
| children  |               | No       | Render the Input, Label, and ErrorMessage as children              |
| ...rest   |               | No       | The rest of the props are spread on the underlying `label` element |

## CSS Variables

| Variable                   | Default Value | Description                                                            |
| -------------------------- | ------------- | ---------------------------------------------------------------------- |
| --mt-baseFontSize          | 1rem          | The text size and dimensions of the button are based off of this value |
| --mt-fontFamily            | 'Roboto'      | The font family to use for the button text                             |
| --mt-field-labelColor      | #757575       | The color of the `Field.Label` text                                    |
| --mt-field-labelErrorColor | #f34335       | The color of the `Field.ErrorMessage` text                             |

# `Field.Label`

## Props

| Prop Name | Default Value | Required | Description                                            |
| --------- | ------------- | -------- | ------------------------------------------------------ |
| className |               | No       | Additional class name(s) to add to the menu item       |
| children  |               | No       | The value to display as the label                      |
| ...rest   |               | No       | The other props are spread onto the underlying element |

# `Field.ErrorMessage`

## Props

| Prop Name | Default Value | Required | Description                                            |
| --------- | ------------- | -------- | ------------------------------------------------------ |
| className |               | No       | Additional class name(s) to add to the menu item       |
| children  |               | No       | The message to display as the error                    |
| ...rest   |               | No       | The other props are spread onto the underlying element |
