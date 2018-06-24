class TextAreaExample extends Component {
  render() {
    return (
      <TextArea
        value={this.state.value}
        onChange={e => this.setState({ value: e.target.value })}
      />
    );
  }

  state = {
    value: 'It was the best of times, it was the worst of times.',
  };
}

return <TextAreaExample />;
