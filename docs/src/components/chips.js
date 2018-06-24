import React, { Component } from 'react';
import { withRouteData, Link } from 'react-static';
import {
  InputChip,
  ActionChip,
  ChoiceChip,
  FilterChip,
  Table,
} from 'materialish';

export class Chips extends Component {
  render() {
    const { component } = this.props;
    const { materialDocsLink } = component;

    return (
      <div className="componentDoc">
        <h1 className="primaryHeader componentDoc_primaryHeader">Chips</h1>
        <p className="paragraph">
          Chips are versatile, compact elements that represent an input,
          attribute, or action. Materialish provides several different
          Components that reflect the different uses of Chips.
        </p>
        <p className="paragraph">
          Although each chip is visually similar, they are implemented with
          different DOM elements under-the-hood, and consequently behave in
          slightly different ways.
        </p>
        <p className="paragraph">
          Pick the Chip that is most appropriate for your use case.
        </p>
        <Table className="componentDoc_componentsTable">
          <Table.Head>
            <Table.HeadRow>
              <Table.HeadCell width="170px">Preview</Table.HeadCell>
              <Table.HeadCell width="110px">Name</Table.HeadCell>
              <Table.HeadCell width="90px">Element</Table.HeadCell>
              <Table.HeadCell>Description</Table.HeadCell>
            </Table.HeadRow>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <InputChip>San Francisco</InputChip>
              </Table.Cell>
              <Table.Cell>
                <Link to="/components/input-chip">Input Chip</Link>
              </Table.Cell>
              <Table.Cell>
                <code>div</code>
              </Table.Cell>
              <Table.Cell>
                represents an entity or different attributes
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <ActionChip onClick={() => {}}>Perform Action</ActionChip>
              </Table.Cell>
              <Table.Cell>
                <Link to="/components/action-chip">Action Chip</Link>
              </Table.Cell>
              <Table.Cell>
                <code>button</code>
              </Table.Cell>
              <Table.Cell>an alternative to buttons</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <ChoiceChip name="size">Small</ChoiceChip>
              </Table.Cell>
              <Table.Cell>
                <Link to="/components/choice-chip">Choice Chip</Link>
              </Table.Cell>
              <Table.Cell>
                <code>radio</code>
              </Table.Cell>
              <Table.Cell>an alternative to radio buttons</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <FilterChip>Netflix</FilterChip>
              </Table.Cell>
              <Table.Cell>
                <Link to="/components/filter-chip">Filter Chip</Link>
              </Table.Cell>
              <Table.Cell>
                <code>checkbox</code>
              </Table.Cell>
              <Table.Cell>an alternative to checkboxes</Table.Cell>
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

export default withRouteData(Chips);
