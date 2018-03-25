import ComponentDoc from "./component-doc";
import buttonCodeUrl from './examples/button.txt';
import buttonReadmeUrl from './readmes/button-readme.md';
import checkboxCodeUrl from './examples/checkbox.txt';
import checkboxReadmeUrl from './readmes/checkbox-readme.md';

export default [
  {
    name: "Checkbox",
    url: "/checkbox",
    componentKey: 'checkbox',
    description: 'A checkbox allows a user to select values.',
    component: ComponentDoc,
    exampleUrl: checkboxCodeUrl,
    readmeUrl: checkboxReadmeUrl,
    materialDocsLink: 'https://material.io/guidelines/components/selection-controls.html'
  },
  {
    name: "Button",
    url: "/button",
    componentKey: 'button',
    description: 'A button represents that an action will occur when the user clicks or touches it.',
    component: ComponentDoc,
    exampleUrl: buttonCodeUrl,
    readmeUrl: buttonReadmeUrl,
    materialDocsLink: 'https://material.io/guidelines/components/buttons.html'
  }
];
