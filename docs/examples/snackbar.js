class SnackBarExample extends Component {
  render() {
    return (
      <Snackbar>
        There was an error.
        <Button flat ripple={false}>
          Retry
        </Button>
      </Snackbar>
    );
  }
}

return <SnackBarExample />;
