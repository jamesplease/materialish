class NavigationExample extends Component {
  render() {
    return (
      <Fragment>
        <Navigation centered>
          <Navigation.Item active>Home</Navigation.Item>
          <Navigation.Item>New Releases</Navigation.Item>
          <Navigation.Item>Profile</Navigation.Item>
        </Navigation>
        <br />
        <Navigation fullWidth>
          <Navigation.Item active>Home</Navigation.Item>
          <Navigation.Item>New Releases</Navigation.Item>
          <Navigation.Item>Profile</Navigation.Item>
        </Navigation>
        <br />
        <Navigation vertical>
          <Navigation.Item active>
            <IconAlarmOn /> Alarm
          </Navigation.Item>
          <Navigation.Item>
            <IconBugReport /> Bugs
          </Navigation.Item>
          <Navigation.Item>
            <IconFace /> Members
          </Navigation.Item>
        </Navigation>
      </Fragment>
    );
  }
}

return <NavigationExample />;
