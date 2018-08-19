function onClick() {
  console.log('Clicked');
}

class ActionChipExample extends Component {
  render() {
    return (
      <ActionChip onClick={onClick}>
        <IconDelete style={iconStyle} /> Delete Item
      </ActionChip>
    );
  }
}

// Note: you are responsible for adding horizontal padding to the icon
// within the chip. Inline styles are used here as an example.
var iconStyle = { marginRight: '0.25rem' };

return <ActionChipExample />;
