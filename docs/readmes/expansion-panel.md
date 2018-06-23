## Usage

```jsx
import { ExpansionPanel } from 'materialish';
import 'materialish/materialish.css';
```

# `ExpansionPanel`

## Props

| Prop Name | Default Value | Required | Description                                                         |
| --------- | ------------- | -------- | ------------------------------------------------------------------- |
| className |               | No       | Additional class name(s) to add to the menu                         |
| open      | false         | No       | Whether or not this ExpansionPanel is expanded                      |
| children  |               | Yes      | A single `ExpansionPanel.Header` and a single `ExpansionPanel.Body` |
| ...rest   |               | No       | Other props are placed on the root element                          |

## CSS Variables

| Variable          | Default Value | Description                      |
| ----------------- | ------------- | -------------------------------- |
| --mt-baseFontSize | 1rem          | The size of text within the menu |
| --mt-fontFamily   | 'Roboto'      | The font family to use for text  |

# `ExpansionPanel.Header`

## Props

| Prop Name | Default Value | Required | Description                                                    |
| --------- | ------------- | -------- | -------------------------------------------------------------- |
| className |               | No       | Additional class name(s) to add to the panel header            |
| children  |               | No       | The content to display in the header of the expansion panel    |
| ...rest   |               | No       | Other props are placed on the root element of the panel header |

# `ExpansionPanel.Body`

## Props

| Prop Name | Default Value | Required | Description                                                                                                  |
| --------- | ------------- | -------- | ------------------------------------------------------------------------------------------------------------ |
| className |               | No       | Additional class name(s) to add to the panel body                                                            |
| children  |               | No       | The content to display in the body of the expansion panel                                                    |
| open      | _inherited_   | No       | Whether or not the panel is open. This value is inherited from the parent, so you do not need to provide it. |
| ...rest   |               | No       | Other props are placed on the root element of the panel body                                                 |
