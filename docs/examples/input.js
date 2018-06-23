class InputExample extends Component {
  render() {
    return (
      <Input
        value={this.state.value}
        onChange={e => this.setState({ value: e.target.value })}
      />
    );
  }

  state = {
    value: 'Paris, France',
  };
}

return <InputExample />;
