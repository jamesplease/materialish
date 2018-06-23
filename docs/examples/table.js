class TableExample extends Component {
  render() {
    return (
      <Table>
        <Table.Head>
          <Table.HeadRow>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Active</Table.HeadCell>
            <Table.HeadCell>Join Date</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell>Location</Table.HeadCell>
          </Table.HeadRow>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>James S.</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
            <Table.Cell>6/12/2013</Table.Cell>
            <Table.Cell>Member</Table.Cell>
            <Table.Cell>Maryland</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Javier P.</Table.Cell>
            <Table.Cell>No</Table.Cell>
            <Table.Cell>5/12/2018</Table.Cell>
            <Table.Cell>Contributor</Table.Cell>
            <Table.Cell>California</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Terri S.</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
            <Table.Cell>1/12/2018</Table.Cell>
            <Table.Cell>Contributor</Table.Cell>
            <Table.Cell>Texas</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Deepthi K.</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
            <Table.Cell>6/12/2018</Table.Cell>
            <Table.Cell>Member</Table.Cell>
            <Table.Cell>Spain</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  }
}

return <TableExample />;
