## Usage

```jsx
import { Table } from 'materialish';
import 'materialish/materialish.css';
```

# `Table`

## Props

| Prop Name | Default Value | Required | Description                                                          |
| --------- | ------------- | -------- | -------------------------------------------------------------------- |
| className |               | No       | Additional class name(s) to add to the menu                          |
| children  |               | No       | `Table.Head` and/or `Table.Body` elements to render within the table |
| ...rest   |               | No       | Other props are placed on the underlying `ul` element of the menu    |

## CSS Variables

| Variable              | Default Value | Description                       |
| --------------------- | ------------- | --------------------------------- |
| --mt-baseFontSize     | 1rem          | The size of text within the table |
| --mt-fontFamily       | 'Roboto'      | The font family to use for text   |
| --mt-table-cellHeight |               | The height to use for table cells |

# `Table.Head`

## Props

| Prop Name | Default Value | Required | Description                                                  |
| --------- | ------------- | -------- | ------------------------------------------------------------ |
| className |               | No       | Additional class name(s) to add to the table head            |
| children  |               | No       | A `Table.HeadRow` element to render within the table head    |
| ...rest   |               | No       | Other props are placed on the root element of the table head |

# `Table.HeadRow`

## Props

| Prop Name | Default Value | Required | Description                                                               |
| --------- | ------------- | -------- | ------------------------------------------------------------------------- |
| className |               | No       | Additional class name(s) to add to the table head row                     |
| children  |               | No       | An array of `Table.HeadCell` elements to render within the table head row |
| ...rest   |               | No       | Other props are placed on the root element of the table head row          |

# `Table.HeadCell`

## Props

| Prop Name   | Default Value | Required | Description                                                                                                                  |
| ----------- | ------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| className   |               | No       | Additional class name(s) to add to the table head cell                                                                       |
| children    |               | No       | An array of `Table.HeadCell` elements to render within the table head cell                                                   |
| width       |               | No       | The width to use for this column. This value will be inherited by the other cells in this column.                            |
| rightBorder | false         | No       | Whether or not to render a border to the right of this cell. This value will be inherited by the other cells in this column. |
| ...rest     |               | No       | Other props are placed on the root element of the table head cell                                                            |

# `Table.Body`

## Props

| Prop Name | Default Value | Required | Description                                                      |
| --------- | ------------- | -------- | ---------------------------------------------------------------- |
| className |               | No       | Additional class name(s) to add to the table body                |
| children  |               | No       | An array of `Table.Row` elements to render within the table body |
| ...rest   |               | No       | Other props are placed on the root element of the table body     |

# `Table.Row`

## Props

| Prop Name | Default Value | Required | Description                                                      |
| --------- | ------------- | -------- | ---------------------------------------------------------------- |
| className |               | No       | Additional class name(s) to add to the table row                 |
| children  |               | No       | An array of `Table.Cell` elements to render within the table row |
| ...rest   |               | No       | Other props are placed on the root element of the table row      |

# `Table.Cell`

## Props

| Prop Name   | Default Value | Required | Description                                                                                                                              |
| ----------- | ------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| className   |               | No       | Additional class name(s) to add to the table cell                                                                                        |
| children    |               | No       | The contents of the table cell                                                                                                           |
| width       | _Inherited_   | No       | The rendered width of the cell. This will be provided for you when you specify it on this column's HeadCell                              |
| rightBorder | _Inherited_   | No       | Whether or not to render a border to the right of this cell. This will be provided for you when you specify it on this column's HeadCell |
| ...rest     |               | No       | Other props are placed on the root element of the table cell                                                                             |

# `Table.ExpandedRowContent`

Expanded row content should be used as a sibling of a Table Cell.

## Props

| Prop Name | Default Value | Required | Description                                                                 |
| --------- | ------------- | -------- | --------------------------------------------------------------------------- |
| className |               | No       | Additional class name(s) to add to the expanded row content                 |
| children  |               | No       | An array of `Table.Cell` elements to render within the expanded row content |
| open      | false         | No       | Whether or not to display the expanded content                              |
| ...rest   |               | No       | Other props are placed on the root element of the expanded row content      |
