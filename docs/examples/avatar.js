class AvatarExample extends Component {
  render() {
    return (
      <Fragment>
        <Avatar image="https://randomuser.me/api/portraits/women/50.jpg" />
        <Avatar initials="JP" />
      </Fragment>
    );
  }
}

return <AvatarExample />;
