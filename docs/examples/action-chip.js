function onClick() {
  console.log('Clicked');
}

class ActionChipExample extends Component {
  render() {
    return (
      <Fragment>
        <ActionChip onClick={onClick}>
          Perform Action
        </ActionChip>
        {' '}
        <ActionChip onClick={onClick} icon={<IconDelete/>}>
          Delete Item
        </ActionChip>
      </Fragment>
    );
  }
}

return <ActionChipExample />;
