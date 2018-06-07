class DialogExample extends Component {
  render() {
    return (
      <Dialog style={{ maxWidth: '500px' }}>
        <Dialog.Title>Dialog Title</Dialog.Title>
        <Dialog.Body>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            consequatur enim voluptates nobis perferendis voluptatibus alias
            modi voluptate dolorum ipsa amet.
          </p>
        </Dialog.Body>
        <Dialog.Actions>
          <Button flat>Cancel</Button>
          <Button flat>Accept</Button>
        </Dialog.Actions>
      </Dialog>
    );
  }
}

return <DialogExample />;
