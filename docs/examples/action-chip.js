function onClick() {
  console.log('Clicked');
}

class ActionChipExample extends Component {
  render() {
    return <ActionChip onClick={onClick}>Perform Action</ActionChip>;
  }
}

return <ActionChipExample />;
