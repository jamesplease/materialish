# Changelog

### v0.13.0 (2018/6/22)

- New components: IconButton, Field
- Removes box shadow on inputs on iOS
- Adds support for monochromatic spinners
- Add ability to configure the focus border of Inputs
- Importing `materialish.css` is now the recommended way to load the CSS for the components

### v0.12.1 (2018/6/18)

- Fixes a bug in the Table.ExpandedRowContent

### v0.12.0 (2018/6/13)

- Adds `nodeRef` to the `Input` component

### v0.11.0 (2018/6/13)

- New components: Input and InlineSpinner

### v0.10.1 (2018/6/13)

- Fixes a bug in the Table.ExpandedRowContent

### v0.10.0 (2018/6/10)

- New components: Menu, Snackbar, Table, and InputChip

### v0.9.0 (2018/6/7)

- Adds Dialog component
- Adds Elevation component
- Adds three Chip components

### v0.8.0 (2018/6/6)

- Adds Radio component

### v0.7.3 (2018/6/5)

- Adjusts dimensions and rendering of Checkbox to more closely align with the Material spec

### v0.7.2 (2018/6/5)

- Fixes an issue with the previous release

### v0.7.1 (2018/6/5)

- Updates the Spinner to use `mt-baseFontSize`
- The `icons-data.json` file now includes category information
- Fixed an issue where some icons were using attribute names instead of prop names

### v0.7.0 (2018/6/5)

- New Component: Spinner
- Adjusts the size of the Avatar component
- Adjusts the default sizing of Buttons to more closely match the Material spec
- Flat and stroked buttons that are disabled no longer have a background

### v0.6.4 (2018/5/25)

- Fix the `propTypes` prop on the exported Components.
- Exports `materialish/icons-data.json`, which contains information about the icons that are included
  in the project.

### v0.6.3 (2018/5/25)

- The unused `spread` prop has been removed from the Ripple.

### v0.6.2 (2018/5/25)

- The icons files are now transpiled to ES5 and CJS.

### v0.6.1 (2018/5/25)

- Ensures that the `/icons` directory is included in the npm package.

### v0.6.0 (2018/5/25)

- Icon Components are now shipped with Materialish.

### v0.5.0 (2018/5/24)

- The library is now distributed with a `materialish.css` and `materialish.min.css` to provide a
  simpler alternative to loading all of the library's CSS.

### v0.4.0 (2018/5/24)

- Introduces the Avatar component

### v0.3.1 (2018/5/23)

- Update the way that the Switch focus state is rendered

### v0.3.0 (2018/5/23)

- Removed the `secondary` prop from the button
- Added the ability to customize the Button's font with the `--mt-fontFamily` CSS Variable
- The built files no longer ship with JavaScript Classes

### v0.2.1 (2018/5/23)

- Small fixes to both the Switch and Checkbox.

### v0.2.0 (2018/5/23)

- Add `Switch` component.

### v0.1.3 (2018/5/23)

- `npm` was having issues with published packages. Publishing a new version
  seems to fix it.

### v0.1.2 (2018/5/21)

- Fix the `className` property on the Checkbox

### v0.1.1 (2018/5/21)

- Fix the previous release

### v0.1.0 (2018/5/17)

- Add the Checkbox component

### v0.0.8 (2018/4/14)

- Fix bug with the previous release

### v0.0.7 (2018/4/14)

- Distribute individual component CSS files with the library

### v0.0.6 (2018/4/13)

- Update the Button to use `em`s rather than hardcoded values

- Remove most of the components (for now)

### v0.0.5 (2018/3/25)

- Resolves a bug with the previous release.

### v0.0.4 (2018/3/25)

- The library is now distributed in a prebuilt format.

### v0.0.3 (2018/3/25)

- There is now an entry point for the npm package. This means you can now
  import components via `import { Button } from 'materialish';`

### v0.0.2 (2018/3/20)

This is the first release of the library.
