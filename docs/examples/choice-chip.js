class ChoiceChipExample extends Component {
  render() {
    return (
      <Fragment>
        <ChoiceChip name="size" icon={<IconLaptop/>}>
          Laptop
        </ChoiceChip>
        {' '}
        <ChoiceChip name="size" icon={<IconPhoneIphone/>}>
          Phone
        </ChoiceChip>
        {' '}
        <ChoiceChip name="size">
          Other
        </ChoiceChip>
      </Fragment>
    );
  }
}

return <ChoiceChipExample />;
