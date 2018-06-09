class SnackBar extends Component {
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

return <SnackBar />;
