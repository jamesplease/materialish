import React, { Component } from 'react';
import { withRouteData, Link } from 'react-static';
import { Field, Input, Table } from 'materialish';

export class TextFields extends Component {
  render() {
    const { component } = this.props;
    const { materialDocsLink } = component;
    const { input, field } = this.state;

    return (
      <div className="componentDoc">
        <h1 className="primaryHeader componentDoc_primaryHeader">
          Text Fields
        </h1>
        <p className="paragraph">Text fields let users enter and edit text.</p>
        <Table className="componentDoc_componentsTable">
          <Table.Head>
            <Table.HeadRow>
              <Table.HeadCell width="270px">Preview</Table.HeadCell>
              <Table.HeadCell width="150px">Name</Table.HeadCell>
              <Table.HeadCell>Description</Table.HeadCell>
            </Table.HeadRow>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Field required>
                  <Field.Label>Place of Residence</Field.Label>
                  <Field.Input
                    value={field}
                    onChange={e => this.setState({ field: e.target.value })}
                    style={{ width: '230px', minWidth: '230px' }}
                  />
                  <Field.ErrorMessage>
                    Invalid place of residence.
                  </Field.ErrorMessage>
                </Field>
              </Table.Cell>
              <Table.Cell>
                <Link to="/components/field">Field</Link>
              </Table.Cell>
              <Table.Cell>
                provides a text input, label, and error message
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Input
                  value={input}
                  onChange={e => this.setState({ input: e.target.value })}
                  style={{ width: '230px', minWidth: '230px' }}
                />
              </Table.Cell>
              <Table.Cell>
                <Link to="/components/input">Input</Link>
              </Table.Cell>
              <Table.Cell>
                a standalone text input, for when you do not need a label or
                error message
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <h2 className="secondaryHeader componentDoc_standaloneSecondaryHeader">
          Useful Links
        </h2>
        <ul className="componentDoc_links">
          <li className="componentDoc_linkItem">
            <a href={materialDocsLink} className="componentDoc_linkAnchor">
              <i className="componentDoc_icon zmdi zmdi-file-text" /> Material
              Guidelines
            </a>
          </li>
        </ul>
      </div>
    );
  }

  state = {
    field: 'Paris, France',
    input: '',
  };
}

export default withRouteData(TextFields);
