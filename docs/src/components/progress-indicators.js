import React, { Component } from 'react';
import { withRouteData, Link } from 'react-static';
import { Spinner, LoadingDots, Table } from 'materialish';

export class ProgressIndicators extends Component {
  render() {
    const { component } = this.props;
    const { materialDocsLink } = component;

    return (
      <div className="componentDoc">
        <h1 className="primaryHeader componentDoc_primaryHeader">
          Progress Indicators
        </h1>
        <p className="paragraph">
          Progress indicators provide information regarding the progress of a
          deterministic or nondeterministic process.
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
                <Spinner />
              </Table.Cell>
              <Table.Cell>
                <Link to="/components/spinner">Spinner</Link>
              </Table.Cell>
              <Table.Cell>a nondeterministic loading indicator</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <LoadingDots />
              </Table.Cell>
              <Table.Cell>
                <Link to="/components/loading-dots">Loading Dots</Link>
              </Table.Cell>
              <Table.Cell>
                another nondeterministic loading indicator
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

export default withRouteData(ProgressIndicators);
