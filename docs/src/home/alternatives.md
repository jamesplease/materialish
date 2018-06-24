# Alternatives

There are many other Material Design component libraries out there. In this guide, we will
compare Materialish to a select number of these other options.

Before we begin, it's important to recognize that Materialish is intended to represent Netflix's
internal design language, and not Material Design. Any library that is intended to
be a direct implementation of Material requires extra tweaks to align it with the Netflix styleguide.

This may not matter to you if you do not work at Netflix, but if you do, then you should
consider the cost of theming the options below when making a decision on which component library to use.

If you do not work at Netflix, then Materialish may not be right for you on account of the
misalignment between the Material style guide and the Materialish style guide, unless you happen to prefer the
changes.

## [React Toolbox](http://react-toolbox.io/#/)

There are a few main differences between React Toolbox and Materialish:

- React Toolbox is committed to providing powerful theming and customization
- Their theming system is more opinionated about how you integrate it with your application
- As a consequence of the above, we believe it is more complicated to integrate React Toolbox into your application
- React Toolbox provides interaction components as well as visual components, whereas Materialish
  is primarily focused on visual components. For instance, their Dialog comes with positioning and animations,
  while the Materialish Dialog provides just the visuals.

Both Materialish and React Toolbox provide a similar number, but a different overall set, of components. In summary,
Materialish could be considered a simpler-to-use, but less flexible set of components compared to React Toolbox.

## [Material UI](https://material-ui.com/api/avatar/)

Material UI provides a large number of components (at the time of writing, nearly four times as many components as Materialish).
Key differences between the implementations are:

- Material UI provides a complicated and powerful [customization/theming system](https://material-ui.com/customization/overrides/) that
  allows you to control how the components appear. This is not a design goal of Materialish
- Material UI uses CSS-in-JS under-the-hood. This makes it simpler to import components, as they inject their own styles. The authors of Material UI
  do not necessarily intend for everyone to use the CSS-in-JS API, it is [made available to you](https://material-ui.com/customization/css-in-js/)
  should you need it. In contrast, Materialish uses "regular" CSS for styles, including CSS Variables.
- Material UI includes interaction components as well as visual components. For instance, their Dialog manages positioning for you.

If your project requires a larger number of components than what Materialish provides, or if you prefer a CSS-in-JS API, then Material UI may be
a better choice for you.
