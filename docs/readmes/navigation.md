## Usage

```jsx
import { Navigation } from 'materialish';
import 'materialish/materialish.css';
```

# `Navigation`

## Props

| Prop Name | Default Value | Required | Description                                                                       |
| --------- | ------------- | -------- | --------------------------------------------------------------------------------- |
| className |               | No       | Additional class name(s) to add to the navigation                                 |
| children  |               | No       | One or more `Navigation.Item` components                                          |
| vertical  | false         | No       | Whether to render the navigation vertically or horizontally                       |
| centered  | false         | No       | Pass `true` to center the `Navigation.Item`s within the navigation                |
| fullWidth | false         | No       | Pass `true` for the `Navigation.Item`s to span the entire width of the navigation |
| ripple    | true          | No       | Pass `false` to disable the ripple effect on the Navigation                       |
| ...rest   |               | No       | Other props are placed on the root node of the navigation                         |

## CSS Variables

| Variable              | Default Value                | Description                                                       |
| --------------------- | ---------------------------- | ----------------------------------------------------------------- |
| --mt-baseFontSize     | 1rem                         | The size of text within the navigation is based off of this value |
| --mt-fontFamily       | 'Roboto'                     | The font family to use for text                                   |
| --mt-navigation-color | var(--mt-mainColor, #2196f3) | This variable determines the color of the navigation              |

# `Navigation.Item`

## Props

| Prop Name | Default Value | Required | Description                                                                               |
| --------- | ------------- | -------- | ----------------------------------------------------------------------------------------- |
| className |               | No       | Additional class name(s) to add to the navigation item                                    |
| children  |               | No       | The contents to render within the navigation item                                         |
| active    | false         | No       | Pass `true` for this item to be active. Only one item should be active at a time.         |
| ripple    |               | No       | Use this prop to override the Navigation's `ripple` prop on a per-`Navigation.Item` basis |
| ...rest   |               | No       | Other props are placed on the root element of the navigation item                         |
