## Usage

```jsx
import { ExpansionPanel } from 'materialish';
import 'materialish/materialish.css';
```

# `ExpansionPanel`

## Props

| Prop Name | Default Value | Description                                                                                 |
| --------- | ------------- | ------------------------------------------------------------------------------------------- |
| className |               | Additional class name(s) to add to the menu                                                 |
| open      | false         | Whether or not this ExpansionPanel is expanded                                              |
| children  |               | A single `ExpansionPanel.Header` and a single `ExpansionPanel.Body`                         |
| nodeRef   |               | Pass a [ref](https://reactjs.org/docs/refs-and-the-dom.html) to get access to the root node |
| ...rest   |               | Other props are placed on the root element                                                  |

## CSS Variables

| Variable          | Default Value | Description                      |
| ----------------- | ------------- | -------------------------------- |
| --mt-baseFontSize | 1rem          | The size of text within the menu |
| --mt-fontFamily   | 'Roboto'      | The font family to use for text  |

# `ExpansionPanel.Header`

## Props

| Prop Name | Default Value | Description                                                                                 |
| --------- | ------------- | ------------------------------------------------------------------------------------------- |
| className |               | Additional class name(s) to add to the panel header                                         |
| children  |               | The content to display in the header of the expansion panel                                 |
| nodeRef   |               | Pass a [ref](https://reactjs.org/docs/refs-and-the-dom.html) to get access to the root node |
| ...rest   |               | Other props are placed on the root element of the panel header                              |

# `ExpansionPanel.Body`

## Props

| Prop Name | Default Value | Description                                                                                                  |
| --------- | ------------- | ------------------------------------------------------------------------------------------------------------ |
| className |               | Additional class name(s) to add to the panel body                                                            |
| children  |               | The content to display in the body of the expansion panel                                                    |
| open      | _inherited_   | Whether or not the panel is open. This value is inherited from the parent, so you do not need to provide it. |
| nodeRef   |               | Pass a [ref](https://reactjs.org/docs/refs-and-the-dom.html) to get access to the root node                  |
| ...rest   |               | Other props are placed on the root element of the panel body                                                 |
