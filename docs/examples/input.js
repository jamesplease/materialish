class InputExample extends Component {
  render() {
    return (
      <Fragment>
        <Input
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value })}
        />
        <br />
        <br />
        <Input
          value={this.state.value}
          clearable
          onClear={() => {
            this.setState({ value: '' });
          }}
          icon={<IconSearch />}
          onChange={e => this.setState({ value: e.target.value })}
        />
      </Fragment>
    );
  }

  state = {
    value: 'Paris, France',
  };
}

return <InputExample />;
