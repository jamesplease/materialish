class ExpansionPanelExample extends Component {
  render() {
    // Pass a `panelId` to toggle whether it is open or closed.
    const togglePanel = panelId => {
      this.setState(prevState => {
        return {
          [panelId]: !prevState[panelId],
        };
      });
    };

    return (
      <div>
        <ExpansionPanel
          open={this.state.one}
          onClick={() => togglePanel('one')}>
          <ExpansionPanel.Header>Expansion Panel One</ExpansionPanel.Header>
          <ExpansionPanel.Body>
            <p style={{ margin: 0 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque fermentum sed magna quis interdum. Suspendisse vitae
              lobortis odio, a accumsan purus. Vivamus suscipit magna et nisl
              mattis vestibulum. Donec interdum leo elementum eros fringilla, ut
              varius velit volutpat. In porttitor tempus purus id lacinia.
              Phasellus vitae blandit tellus, fermentum dictum libero.
            </p>
          </ExpansionPanel.Body>
        </ExpansionPanel>
        <ExpansionPanel
          open={this.state.two}
          onClick={() => togglePanel('two')}>
          <ExpansionPanel.Header>Expansion Panel Two</ExpansionPanel.Header>
          <ExpansionPanel.Body>
            <p style={{ margin: 0 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque fermentum sed magna quis interdum. Suspendisse vitae
              lobortis odio, a accumsan purus. Vivamus suscipit magna et nisl
              mattis vestibulum. Donec interdum leo elementum eros fringilla, ut
              varius velit volutpat. In porttitor tempus purus id lacinia.
              Phasellus vitae blandit tellus, fermentum dictum libero. Nullam
              lacus leo, convallis ut mattis non, luctus eu tellus.
            </p>
          </ExpansionPanel.Body>
        </ExpansionPanel>
        <ExpansionPanel
          open={this.state.three}
          onClick={() => togglePanel('three')}>
          <ExpansionPanel.Header>Expansion Panel Three</ExpansionPanel.Header>
          <ExpansionPanel.Body>
            <p style={{ margin: 0 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque fermentum sed magna quis interdum. Suspendisse vitae
              lobortis odio, a accumsan purus.
            </p>
          </ExpansionPanel.Body>
        </ExpansionPanel>
      </div>
    );
  }

  state = {
    one: false,
    two: false,
    three: false,
  };
}

return <ExpansionPanelExample />;
