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
        <InputChip icon={<IconBusiness />}>San Francisco</InputChip>
        {' '}
        <InputChip onClick={onClick}>Clickable</InputChip>
        {' '}
        <InputChip onClose={onClose}>Closeable</InputChip>
      </Fragment>
    );
  }
}

return <InputChipExample />;
