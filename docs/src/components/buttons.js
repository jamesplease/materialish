import React, { Component } from 'react';
import { withRouteData, Link } from 'react-static';
import { Button, IconButton, Table } from 'materialish';
import IconAddAlert from 'materialish/icon-add-alert';

export class Buttons extends Component {
  render() {
    const { component } = this.props;
    const { materialDocsLink } = component;

    return (
      <div className="componentDoc">
        <h1 className="primaryHeader componentDoc_primaryHeader">Buttons</h1>
        <p className="paragraph">
          Buttons represent that an action will occur when the user clicks or
          touches them.
        </p>
        <Table className="componentDoc_componentsTable">
          <Table.Head>
            <Table.HeadRow>
              <Table.HeadCell width="170px">Preview</Table.HeadCell>
              <Table.HeadCell width="150px">Name</Table.HeadCell>
              <Table.HeadCell>Description</Table.HeadCell>
            </Table.HeadRow>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Button>Click Me</Button>
              </Table.Cell>
              <Table.Cell>
                <Link to="/components/button">Button</Link>
              </Table.Cell>
              <Table.Cell>
                a button that has text, and may optionally also include an icon
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <IconButton>
                  <IconAddAlert />
                </IconButton>
              </Table.Cell>
              <Table.Cell>
                <Link to="/components/icon-button">Icon Button</Link>
              </Table.Cell>
              <Table.Cell>a round button with an icon, and no text</Table.Cell>
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

export default withRouteData(Buttons);
