## Usage

```jsx
import { Menu } from 'materialish';
import 'materialish/menu.css';
```

# `Menu`

## Props

| Prop Name | Default Value | Required | Description                                                       |
| --------- | ------------- | -------- | ----------------------------------------------------------------- |
| className |               | No       | Additional class name(s) to add to the menu                       |
| ...rest   |               | No       | Other props are placed on the underlying `ul` element of the menu |

## CSS Variables

| Variable               | Default Value | Description                               |
| ---------------------- | ------------- | ----------------------------------------- |
| --mt-baseFontSize      | 1rem          | The size of text within the menu          |
| --mt-fontFamily        | 'Roboto'      | The font family to use for text           |
| --mt-menuItemMinHeight |               | The minimum allowed height for menu items |

# `Menu.Item`

## Props

| Prop Name | Default Value | Required | Description                                                                 |
| --------- | ------------- | -------- | --------------------------------------------------------------------------- |
| className |               | No       | Additional class name(s) to add to the menu item                            |
| separator | false         | No       | Pass `true` to include a border-bottom to the menu item                     |
| selected  | false         | No       | Whether or not this menu item is currently selected                         |
| ripple    | true          | No       | Whether or not to display the "ripple" effect when the menu item is clicked |
| children  |               | No       | The contents to render within the menu item                                 |
| ...rest   |               | No       | Other props are placed on the root element of the menu item                 |
