class FieldExample extends Component {
  render() {
    const { value, isEmpty } = this.state;

    return (
      <Field required>
        <Field.Label>Place of Residence</Field.Label>
        <Field.Input error={isEmpty} onChange={this.onChange} value={value} />
        {isEmpty && (
          <Field.ErrorMessage>
            Place of residence is required.
          </Field.ErrorMessage>
        )}
      </Field>
    );
  }

  state = {
    value: 'Paris, France',
    isEmpty: false,
  };

  onChange = e => {
    this.setState({
      value: e.target.value,
      isEmpty: e.target.value.length === 0,
    });
  };
}

return <FieldExample />;
