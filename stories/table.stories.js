import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { setOptions } from '@storybook/addon-options';
import { withNotes } from '@storybook/addon-notes';
import '../components/table/table.css';
import Table from '../components/table/table';
import Checkbox from '../components/checkbox/checkbox';

setOptions({
  name: 'Materialish',
  addonPanelInRight: true
});

const numRows = Array.apply(null, { length: 5 });

storiesOf('Table', module)
  .addDecorator(withKnobs)
  .add('Regular', () => {
    const tall = boolean('Tall', false);
    return (
      <Table style={{ fontSize: '14px' }}>
        <Table.Head>
          <Table.HeadRow>
            <Table.HeadCell separator style={{ width: 300 }}>
              <p>Column 1</p>
            </Table.HeadCell>
            <Table.HeadCell style={{ width: 100 }}>
              <p>Column 2</p>
            </Table.HeadCell>
            <Table.HeadCell>
              <p>Column 3</p>
            </Table.HeadCell>
          </Table.HeadRow>
        </Table.Head>
        <Table.Body>
          {numRows.map((val, idx) => (
            <Table.Row tall={tall} key={idx}>
              <Table.Cell separator>
                <p>Cell</p>
              </Table.Cell>
              <Table.Cell>
                <p>Cell</p>
              </Table.Cell>
              <Table.Cell>
                <p>Cell</p>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  })
  .add('Title & subtitle', () => {
    const tall = boolean('Tall', false);
    return (
      <Table style={{ fontSize: '14px' }}>
        <Table.Head>
          <Table.HeadRow>
            <Table.HeadCell style={{ width: 300 }}>
              <p>Column 1</p>
            </Table.HeadCell>
            <Table.HeadCell style={{ width: 100 }}>
              <p>Column 2</p>
            </Table.HeadCell>
            <Table.HeadCell>
              <p>Column 3</p>
            </Table.HeadCell>
          </Table.HeadRow>
        </Table.Head>
        <Table.Body>
          {numRows.map((val, idx) => (
            <Table.Row tall={tall} key={idx}>
              <Table.Cell>
                <Table.CellTitle>I am a title</Table.CellTitle>
                <Table.CellSubtitle>I am a subtitle</Table.CellSubtitle>
              </Table.Cell>
              <Table.Cell>
                <p>Cell</p>
              </Table.Cell>
              <Table.Cell>
                <p>Cell</p>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  })
  .add('Selectable', () => {
    const tall = boolean('Tall', false);
    return (
      <Table style={{ fontSize: '14px' }}>
        <Table.Head>
          <Table.HeadRow>
            <Table.HeadCell style={{ width: 30 }}>
              <Checkbox />
            </Table.HeadCell>
            <Table.HeadCell style={{ width: 300 }}>
              <p>Column 1</p>
            </Table.HeadCell>
            <Table.HeadCell style={{ width: 100 }}>
              <p>Column 2</p>
            </Table.HeadCell>
            <Table.HeadCell>
              <p>Column 3</p>
            </Table.HeadCell>
          </Table.HeadRow>
        </Table.Head>
        <Table.Body>
          <Table.Row tall={tall} selected>
            <Table.Cell>
              <Checkbox defaultChecked />
            </Table.Cell>
            <Table.Cell>
              <p>Cell</p>
            </Table.Cell>
            <Table.Cell>
              <p>Cell</p>
            </Table.Cell>
            <Table.Cell>
              <p>Cell</p>
            </Table.Cell>
          </Table.Row>
          <Table.Row tall={tall}>
            <Table.Cell>
              <Checkbox />
            </Table.Cell>
            <Table.Cell>
              <p>Cell</p>
            </Table.Cell>
            <Table.Cell>
              <p>Cell</p>
            </Table.Cell>
            <Table.Cell>
              <p>Cell</p>
            </Table.Cell>
          </Table.Row>
          <Table.Row tall={tall}>
            <Table.Cell>
              <Checkbox />
            </Table.Cell>
            <Table.Cell>
              <p>Cell</p>
            </Table.Cell>
            <Table.Cell>
              <p>Cell</p>
            </Table.Cell>
            <Table.Cell>
              <p>Cell</p>
            </Table.Cell>
          </Table.Row>
          <Table.Row tall={tall}>
            <Table.Cell>
              <Checkbox />
            </Table.Cell>
            <Table.Cell>
              <p>Cell</p>
            </Table.Cell>
            <Table.Cell>
              <p>Cell</p>
            </Table.Cell>
            <Table.Cell>
              <p>Cell</p>
            </Table.Cell>
          </Table.Row>
          <Table.Row tall={tall}>
            <Table.Cell>
              <Checkbox />
            </Table.Cell>
            <Table.Cell>
              <p>Cell</p>
            </Table.Cell>
            <Table.Cell>
              <p>Cell</p>
            </Table.Cell>
            <Table.Cell>
              <p>Cell</p>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  });
