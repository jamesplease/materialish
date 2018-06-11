class TableExample extends Component {
  render() {
    return (
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
    );
  }
}

return <TableExample />;
