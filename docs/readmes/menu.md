## Usage

```jsx
import { Menu } from 'materialish';
import 'materialish/materialish.css';
```

# `Menu`

## Props

| Prop Name | Default Value | Description                                                                                 |
| --------- | ------------- | ------------------------------------------------------------------------------------------- |
| className |               | Additional class name(s) to add to the menu                                                 |
| nodeRef   |               | Pass a [ref](https://reactjs.org/docs/refs-and-the-dom.html) to get access to the root node |
| ...rest   |               | Other props are placed on the underlying `ul` element of the menu                           |

## CSS Variables

| Variable               | Default Value | Description                               |
| ---------------------- | ------------- | ----------------------------------------- |
| --mt-baseFontSize      | 1rem          | The size of text within the menu          |
| --mt-fontFamily        | 'Roboto'      | The font family to use for text           |
| --mt-menuItemMinHeight |               | The minimum allowed height for menu items |

# `Menu.Item`

## Props

| Prop Name | Default Value | Description                                                                                 |
| --------- | ------------- | ------------------------------------------------------------------------------------------- |
| className |               | Additional class name(s) to add to the menu item                                            |
| separator | false         | Pass `true` to include a border-bottom to the menu item                                     |
| selected  | false         | Whether or not this menu item is currently selected                                         |
| ripple    | true          | Whether or not to display the "ripple" effect when the menu item is clicked                 |
| children  |               | The contents to render within the menu item                                                 |
| nodeRef   |               | Pass a [ref](https://reactjs.org/docs/refs-and-the-dom.html) to get access to the root node |
| ...rest   |               | Other props are placed on the root element of the menu item                                 |

# `Menu.Separator`

## Props

| Prop Name | Default Value | Description                                                                                 |
| --------- | ------------- | ------------------------------------------------------------------------------------------- |
| className |               | Additional class name(s) to add to the menu separator                                       |
| nodeRef   |               | Pass a [ref](https://reactjs.org/docs/refs-and-the-dom.html) to get access to the root node |
| ...rest   |               | Other props are placed on the root element of the menu separator                            |
