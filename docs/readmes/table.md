## Usage

```jsx
import { Table } from 'materialish';
import 'materialish/materialish.css';
```

# `Table`

## Props

| Prop Name | Default Value | Description                                                                                 |
| --------- | ------------- | ------------------------------------------------------------------------------------------- |
| className |               | Additional class name(s) to add to the menu                                                 |
| children  |               | `Table.Head` and/or `Table.Body` elements to render within the table                        |
| nodeRef   |               | Pass a [ref](https://reactjs.org/docs/refs-and-the-dom.html) to get access to the root node |
| ...rest   |               | Other props are placed on the underlying `ul` element of the menu                           |

## CSS Variables

| Variable              | Default Value | Description                       |
| --------------------- | ------------- | --------------------------------- |
| --mt-baseFontSize     | 1rem          | The size of text within the table |
| --mt-fontFamily       | 'Roboto'      | The font family to use for text   |
| --mt-table-cellHeight |               | The height to use for table cells |

# `Table.Head`

## Props

| Prop Name | Default Value | Description                                                                                 |
| --------- | ------------- | ------------------------------------------------------------------------------------------- |
| className |               | Additional class name(s) to add to the table head                                           |
| children  |               | A `Table.HeadRow` element to render within the table head                                   |
| nodeRef   |               | Pass a [ref](https://reactjs.org/docs/refs-and-the-dom.html) to get access to the root node |
| ...rest   |               | Other props are placed on the root element of the table head                                |

# `Table.HeadRow`

## Props

| Prop Name | Default Value | Description                                                                                 |
| --------- | ------------- | ------------------------------------------------------------------------------------------- |
| className |               | Additional class name(s) to add to the table head row                                       |
| children  |               | An array of `Table.HeadCell` elements to render within the table head row                   |
| nodeRef   |               | Pass a [ref](https://reactjs.org/docs/refs-and-the-dom.html) to get access to the root node |
| ...rest   |               | Other props are placed on the root element of the table head row                            |

# `Table.HeadCell`

## Props

| Prop Name   | Default Value | Description                                                                                                                  |
| ----------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| className   |               | Additional class name(s) to add to the table head cell                                                                       |
| children    |               | An array of `Table.HeadCell` elements to render within the table head cell                                                   |
| width       |               | The width to use for this column. This value will be inherited by the other cells in this column.                            |
| rightBorder | false         | Whether or not to render a border to the right of this cell. This value will be inherited by the other cells in this column. |
| nodeRef     |               | Pass a [ref](https://reactjs.org/docs/refs-and-the-dom.html) to get access to the root node                                  |
| ...rest     |               | Other props are placed on the root element of the table head cell                                                            |

# `Table.Body`

## Props

| Prop Name | Default Value | Description                                                                                 |
| --------- | ------------- | ------------------------------------------------------------------------------------------- |
| className |               | Additional class name(s) to add to the table body                                           |
| children  |               | An array of `Table.Row` elements to render within the table body                            |
| nodeRef   |               | Pass a [ref](https://reactjs.org/docs/refs-and-the-dom.html) to get access to the root node |
| ...rest   |               | Other props are placed on the root element of the table body                                |

# `Table.Row`

## Props

| Prop Name | Default Value | Description                                                                                 |
| --------- | ------------- | ------------------------------------------------------------------------------------------- |
| className |               | Additional class name(s) to add to the table row                                            |
| children  |               | An array of `Table.Cell` elements to render within the table row                            |
| nodeRef   |               | Pass a [ref](https://reactjs.org/docs/refs-and-the-dom.html) to get access to the root node |
| ...rest   |               | Other props are placed on the root element of the table row                                 |

# `Table.Cell`

## Props

| Prop Name   | Default Value | Description                                                                                                                              |
| ----------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| className   |               | Additional class name(s) to add to the table cell                                                                                        |
| children    |               | The contents of the table cell                                                                                                           |
| width       | _Inherited_   | The rendered width of the cell. This will be provided for you when you specify it on this column's HeadCell                              |
| rightBorder | _Inherited_   | Whether or not to render a border to the right of this cell. This will be provided for you when you specify it on this column's HeadCell |
| nodeRef     |               | Pass a [ref](https://reactjs.org/docs/refs-and-the-dom.html) to get access to the root node                                              |
| ...rest     |               | Other props are placed on the root element of the table cell                                                                             |

# `Table.ExpandedRowContent`

Expanded row content should be used as a sibling of a Table Cell.

## Props

| Prop Name | Default Value | Description                                                                                 |
| --------- | ------------- | ------------------------------------------------------------------------------------------- |
| className |               | Additional class name(s) to add to the expanded row content                                 |
| children  |               | An array of `Table.Cell` elements to render within the expanded row content                 |
| open      | false         | Whether or not to display the expanded content                                              |
| nodeRef   |               | Pass a [ref](https://reactjs.org/docs/refs-and-the-dom.html) to get access to the root node |
| ...rest   |               | Other props are placed on the root element of the expanded row content                      |
