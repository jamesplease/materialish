import React, { Component } from 'react';
import { withRouteData, Link } from 'react-static';
import { Checkbox, Radio, Switch, Table } from 'materialish';

export class SelectionControls extends Component {
  render() {
    const { component } = this.props;
    const { materialDocsLink } = component;

    return (
      <div className="componentDoc">
        <h1 className="primaryHeader componentDoc_primaryHeader">
          Selection Controls
        </h1>
        <p className="paragraph">
          Selection controls allow the user to select options.
        </p>
        <Table className="componentDoc_componentsTable">
          <Table.Head>
            <Table.HeadRow>
              <Table.HeadCell width="100px">Preview</Table.HeadCell>
              <Table.HeadCell width="150px">Name</Table.HeadCell>
              <Table.HeadCell>Description</Table.HeadCell>
            </Table.HeadRow>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Checkbox />
              </Table.Cell>
              <Table.Cell>
                <Link to="/components/checkbox">Checkbox</Link>
              </Table.Cell>
              <Table.Cell>
                represents a boolean value that can be in one of two states,
                true or false
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Radio />
              </Table.Cell>
              <Table.Cell>
                <Link to="/components/radio">Radio Button</Link>
              </Table.Cell>
              <Table.Cell>
                represents one option among several choices
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Switch />
              </Table.Cell>
              <Table.Cell>
                <Link to="/components/switch">Switch</Link>
              </Table.Cell>
              <Table.Cell>
                represents a value that can be toggled on or off
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
}

export default withRouteData(SelectionControls);
