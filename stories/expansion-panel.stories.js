import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { setOptions } from '@storybook/addon-options';
import '../src/expansion-panel/expansion-panel.css';
import '../src/expandable/expandable.css';
import { ExpansionPanel } from '../src/index';

setOptions({
  name: 'Materialish',
  addonPanelInRight: true,
});

storiesOf('ExpansionPanel', module)
  .addDecorator(withKnobs)
  .add('Regular', () => (
    <div>
      <ExpansionPanel open={boolean('Open (first)', true)}>
        <ExpansionPanel.Header>Expansion Panel One</ExpansionPanel.Header>
        <ExpansionPanel.Body>
          <p style={{ margin: 0 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque fermentum sed magna quis interdum. Suspendisse vitae
            lobortis odio, a accumsan purus. Vivamus suscipit magna et nisl
            mattis vestibulum. Donec interdum leo elementum eros fringilla, ut
            varius velit volutpat. In porttitor tempus purus id lacinia.
            Phasellus vitae blandit tellus, fermentum dictum libero. Nullam
            lacus leo, convallis ut mattis non, luctus eu tellus. Cras elit
            nisi, ultrices id fringilla quis, elementum at neque. Nam ut
            pulvinar erat. Praesent tristique blandit erat, eu tincidunt lacus
            congue ut. Morbi fermentum tincidunt velit, non ullamcorper nulla
            vulputate at. Morbi est lectus, luctus et finibus id, lobortis at
            ex.
          </p>
        </ExpansionPanel.Body>
      </ExpansionPanel>
      <ExpansionPanel open={boolean('Open (second)', false)}>
        <ExpansionPanel.Header>Expansion Panel Two</ExpansionPanel.Header>
        <ExpansionPanel.Body>
          <p style={{ margin: 0 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque fermentum sed magna quis interdum. Suspendisse vitae
            lobortis odio, a accumsan purus. Vivamus suscipit magna et nisl
            mattis vestibulum. Donec interdum leo elementum eros fringilla, ut
            varius velit volutpat. In porttitor tempus purus id lacinia.
            Phasellus vitae blandit tellus, fermentum dictum libero. Nullam
            lacus leo, convallis ut mattis non, luctus eu tellus. Cras elit
            nisi, ultrices id fringilla quis, elementum at neque. Nam ut
            pulvinar erat. Praesent tristique blandit erat, eu tincidunt lacus
            congue ut. Morbi fermentum tincidunt velit, non ullamcorper nulla
            vulputate at. Morbi est lectus, luctus et finibus id, lobortis at
            ex.
          </p>
        </ExpansionPanel.Body>
      </ExpansionPanel>
      <ExpansionPanel open={boolean('Open (third)', false)}>
        <ExpansionPanel.Header>Expansion Panel Three</ExpansionPanel.Header>
        <ExpansionPanel.Body>
          <p style={{ margin: 0 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque fermentum sed magna quis interdum. Suspendisse vitae
            lobortis odio, a accumsan purus. Vivamus suscipit magna et nisl
            mattis vestibulum. Donec interdum leo elementum eros fringilla, ut
            varius velit volutpat. In porttitor tempus purus id lacinia.
            Phasellus vitae blandit tellus, fermentum dictum libero. Nullam
            lacus leo, convallis ut mattis non, luctus eu tellus. Cras elit
            nisi, ultrices id fringilla quis, elementum at neque. Nam ut
            pulvinar erat. Praesent tristique blandit erat, eu tincidunt lacus
            congue ut. Morbi fermentum tincidunt velit, non ullamcorper nulla
            vulputate at. Morbi est lectus, luctus et finibus id, lobortis at
            ex.
          </p>
        </ExpansionPanel.Body>
      </ExpansionPanel>
    </div>
  ));
