import React from 'react';
import { storiesOf } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import '../src/table/table.css';
import { Table } from '../src/index';

setOptions({
  name: 'Materialish',
  addonPanelInRight: true,
});

storiesOf('Table', module)
  .add('Regular', () => (
    <Table>
      <Table.Head>
        <Table.HeadRow>
          <Table.HeadCell>File</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>Due Date</Table.HeadCell>
          <Table.HeadCell>Size</Table.HeadCell>
          <Table.HeadCell>Assignee</Table.HeadCell>
        </Table.HeadRow>
      </Table.Head>
      <Table.Body>
        <Table.Row selected>
          <Table.Cell>Test.doc</Table.Cell>
          <Table.Cell>Not Delivered</Table.Cell>
          <Table.Cell>6/12/2018</Table.Cell>
          <Table.Cell>128kb</Table.Cell>
          <Table.Cell>kermit@test.com</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Test.doc</Table.Cell>
          <Table.Cell>Not Delivered</Table.Cell>
          <Table.Cell>6/12/2018</Table.Cell>
          <Table.Cell>128kb</Table.Cell>
          <Table.Cell>kermit@test.com</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Test.doc</Table.Cell>
          <Table.Cell>Not Delivered</Table.Cell>
          <Table.Cell>6/12/2018</Table.Cell>
          <Table.Cell>128kb</Table.Cell>
          <Table.Cell>kermit@test.com</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Test.doc</Table.Cell>
          <Table.Cell>Not Delivered</Table.Cell>
          <Table.Cell>6/12/2018</Table.Cell>
          <Table.Cell>128kb</Table.Cell>
          <Table.Cell>kermit@test.com</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ))
  .add('With Separators', () => (
    <Table>
      <Table.Head>
        <Table.HeadRow>
          <Table.HeadCell rightBorder>File</Table.HeadCell>
          <Table.HeadCell rightBorder>Status</Table.HeadCell>
          <Table.HeadCell rightBorder>Due Date</Table.HeadCell>
          <Table.HeadCell rightBorder>Size</Table.HeadCell>
          <Table.HeadCell>Assignee</Table.HeadCell>
        </Table.HeadRow>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Test.doc</Table.Cell>
          <Table.Cell>Not Delivered</Table.Cell>
          <Table.Cell>6/12/2018</Table.Cell>
          <Table.Cell>128kb</Table.Cell>
          <Table.Cell>kermit@test.com</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Test.doc</Table.Cell>
          <Table.Cell>Not Delivered</Table.Cell>
          <Table.Cell>6/12/2018</Table.Cell>
          <Table.Cell>128kb</Table.Cell>
          <Table.Cell>kermit@test.com</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Test.doc</Table.Cell>
          <Table.Cell>Not Delivered</Table.Cell>
          <Table.Cell>6/12/2018</Table.Cell>
          <Table.Cell>128kb</Table.Cell>
          <Table.Cell>kermit@test.com</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Test.doc</Table.Cell>
          <Table.Cell>Not Delivered</Table.Cell>
          <Table.Cell>6/12/2018</Table.Cell>
          <Table.Cell>128kb</Table.Cell>
          <Table.Cell>kermit@test.com</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ))
  .add('With fixed size columns', () => (
    <Table>
      <Table.Head>
        <Table.HeadRow>
          <Table.HeadCell width="300px">File (Fixed 300px)</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>Due Date</Table.HeadCell>
          <Table.HeadCell width="150px">Size (Fixed 150px)</Table.HeadCell>
          <Table.HeadCell>Assignee</Table.HeadCell>
        </Table.HeadRow>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Test.doc</Table.Cell>
          <Table.Cell>Not Delivered</Table.Cell>
          <Table.Cell>6/12/2018</Table.Cell>
          <Table.Cell>128kb</Table.Cell>
          <Table.Cell>kermit@test.com</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Test.doc</Table.Cell>
          <Table.Cell>Not Delivered</Table.Cell>
          <Table.Cell>6/12/2018</Table.Cell>
          <Table.Cell>128kb</Table.Cell>
          <Table.Cell>kermit@test.com</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Test.doc</Table.Cell>
          <Table.Cell>Not Delivered</Table.Cell>
          <Table.Cell>6/12/2018</Table.Cell>
          <Table.Cell>128kb</Table.Cell>
          <Table.Cell>kermit@test.com</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Test.doc</Table.Cell>
          <Table.Cell>Not Delivered</Table.Cell>
          <Table.Cell>6/12/2018</Table.Cell>
          <Table.Cell>128kb</Table.Cell>
          <Table.Cell>kermit@test.com</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ));
