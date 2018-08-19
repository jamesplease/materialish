class FilterChipExample extends Component {
  render() {
    return (
      <Fragment>
        <FilterChip>Netflix</FilterChip>
        {' '}
        <FilterChip>Hulu</FilterChip>
        {' '}
        <FilterChip icon={<IconTv />}>Cable</FilterChip>
      </Fragment>
    );
  }
}

return <FilterChipExample />;
