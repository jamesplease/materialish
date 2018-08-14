## Usage

```jsx
import { Field } from 'materialish';
import 'materialish/materialish.css';
```

# `Field`

## Props

| Prop Name | Default Value | Description                                                        |
| --------- | ------------- | ------------------------------------------------------------------ |
| className |               | Additional class name(s) to add to the menu item                   |
| required  | false         | Whether or not the value that this field represents is required    |
| children  |               | Render the Input, Label, and ErrorMessage as children              |
| ...rest   |               | The rest of the props are spread on the underlying `label` element |

## CSS Variables

| Variable                   | Default Value | Description                                                            |
| -------------------------- | ------------- | ---------------------------------------------------------------------- |
| --mt-baseFontSize          | 1rem          | The text size and dimensions of the button are based off of this value |
| --mt-fontFamily            | 'Roboto'      | The font family to use for the button text                             |
| --mt-field-labelColor      | #757575       | The color of the `Field.Label` text                                    |
| --mt-field-labelErrorColor | #f34335       | The color of the `Field.ErrorMessage` text                             |

# `Field.Input`

This is an alias of [**Input**](/components/input).

# `Field.TextArea`

This is an alias of [**TextArea**](/components/text-area).

# `Field.Label`

## Props

| Prop Name | Default Value | Description                                            |
| --------- | ------------- | ------------------------------------------------------ |
| className |               | Additional class name(s) to add to the menu item       |
| children  |               | The value to display as the label                      |
| ...rest   |               | The other props are spread onto the underlying element |

# `Field.ErrorMessage`

## Props

| Prop Name | Default Value | Description                                            |
| --------- | ------------- | ------------------------------------------------------ |
| className |               | Additional class name(s) to add to the menu item       |
| children  |               | The message to display as the error                    |
| ...rest   |               | The other props are spread onto the underlying element |
