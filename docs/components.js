export default [
  {
    name: 'Avatar',
    url: 'avatar',
    componentKey: 'avatar',
    description: `An Avatar repesents a user. Avatars can display an image representing the user, or their initials.`,
    component: 'src/components/component-doc',
  },
  {
    name: 'Button',
    url: 'button',
    componentKey: 'button',
    description:
      'A button represents that an action will occur when the user clicks or touches it.',
    component: 'src/components/component-doc',
    materialDocsLink: 'https://material.io/guidelines/components/buttons.html',
  },
  {
    name: 'Checkbox',
    url: 'checkbox',
    componentKey: 'checkbox',
    description:
      'A Checkbox represents a boolean value that can be in one of two states, true or false.',
    component: 'src/components/component-doc',
    materialDocsLink:
      'https://material.io/design/components/selection-controls.html#checkboxes',
  },
  {
    name: 'Switch',
    url: 'switch',
    componentKey: 'switch',
    description: 'A Switch represents a value that can be toggled on or off.',
    component: 'src/components/component-doc',
    materialDocsLink:
      'https://material.io/design/components/selection-controls.html#switches',
  },
  {
    name: 'Spinner',
    url: 'spinner',
    componentKey: 'spinner',
    description: 'A Spinner is a nondeterministic loading indicator.',
    component: 'src/components/component-doc',
  },
  {
    name: 'Radio Button',
    url: 'radio',
    componentKey: 'radio',
    description: 'A Radio button represents one option among several choices.',
    component: 'src/components/component-doc',
    materialDocsLink:
      'https://material.io/design/components/selection-controls.html#radio-buttons',
  },
  {
    name: 'Dialog',
    url: 'dialog',
    componentKey: 'dialog',
    editorHeight: '500px',
    description:
      'Dialogs inform users about a task or decision that needs to be made.',
    component: 'src/components/component-doc',
    materialDocsLink: 'https://material.io/design/components/dialogs.html',
  },
  {
    name: 'Elevation',
    url: 'elevation',
    componentKey: 'elevation',
    description:
      'Elevations create a sense of depth by applying a drop shadow to an element.',
    component: 'src/components/component-doc',
  },
  {
    name: 'Menu',
    url: 'menu',
    componentKey: 'menu',
    description:
      'Menus represent a list of items. They can be used within selects or dropdowns.',
    component: 'src/components/component-doc',
  },
  {
    name: 'Snackbar',
    url: 'snackbar',
    componentKey: 'snackbar',
    description:
      'Snackbars provide brief messages about app processes at the bottom of the screen.',
    component: 'src/components/component-doc',
    materialDocsLink: 'https://material.io/design/components/snackbars.html',
  },
  {
    name: 'Chips',
    url: 'chips',
    componentKey: 'chips',
    description:
      'Chips are versatile elements that can serve numerous roles in your application.',
    component: 'src/components/chips',
    materialDocsLink: 'https://material.io/design/components/chips.html',
    children: [
      {
        name: 'Action Chip',
        url: 'action-chip',
        componentKey: 'action-chip',
        description:
          'Action chips represent that an action will occur when a user clicks or touches it. They are an alternative to buttons.',
        component: 'src/components/component-doc',
        materialDocsLink:
          'https://material.io/design/components/chips.html#action-chips',
      },
      {
        name: 'Choice Chip',
        url: 'choice-chip',
        componentKey: 'choice-chip',
        description:
          'Choice chips allow for the selection of a single chip from a set of options. They are an alternative to dropdowns and radio buttons.',
        component: 'src/components/component-doc',
        materialDocsLink:
          'https://material.io/design/components/chips.html#choice-chips',
      },
      {
        name: 'Filter Chip',
        url: 'filter-chip',
        componentKey: 'filter-chip',
        description:
          'Filter chips use descriptive words to filter content. They are an alternative to checkboxes.',
        component: 'src/components/component-doc',
        materialDocsLink:
          'https://material.io/design/components/chips.html#filter-chips',
      },
    ],
  },
];
