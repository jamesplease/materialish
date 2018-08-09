class ProgressBarExample extends Component {
  render() {
    return (
      <Fragment>
        <ProgressBar buffered={90} loaded={20} />
        <br />
        <ProgressBar indeterminate />
      </Fragment>
    );
  }
}

return <ProgressBarExample />;
