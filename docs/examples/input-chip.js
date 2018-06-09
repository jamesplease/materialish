function onClose() {
  console.log('The close button was clicked.');
}

function onClick() {
  console.log('The chip was clicked.');
}

class InputChipExample extends Component {
  render() {
    return (
      <Fragment>
        <InputChip onClose={onClose}>San Francisco</InputChip>
        <InputChip onClick={onClick}>Click me</InputChip>
      </Fragment>
    );
  }
}

return <InputChipExample />;
