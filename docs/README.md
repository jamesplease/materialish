# Docs

This is the documentation site for Materialish.

### Adding a New Component

It is not straightforward to add a new component. There are a lot of steps, and it is
something that we need to work on.

The intention of this guide is that it will make the process a little less painful for you.

#### 1. Create a README

A component's README documents how to import the component as well as its props and CSS Variables API.

The README files go in [`docs/readmes`](https://github.com/jamesplease/materialish/tree/master/docs/readmes).

It can be useful to make a new README by referencing an existing one. Check out
[the Avatar README](https://github.com/jamesplease/materialish/blob/master/docs/readmes/avatar.md)!

#### 2. Create an example

The "example" is the code snippet that appears in the editor on the component's documentation page.

Examples are placed within [`docs/examples`](https://github.com/jamesplease/materialish/tree/master/docs/examples).

As with READMEs, it can be useful to build a new example by referencing an existing one. Check out
[the Button example](https://github.com/jamesplease/materialish/blob/master/docs/examples/button.js).

Within the example, there are a few global variables available to you. They are:

* `React`
* `Component`
* `Fragment`
* `PropTypes`
* and all of the exports of Materialish

What this means is that you can use as many Materialish components in a given example as you would like. You don't
need to limit yourself to the component that the example is for.

#### 3. Load the example and README within the site config

Near the top of [docs/static.config.js](https://github.com/jamesplease/materialish/blob/master/docs/static.config.js), all of
the examples and readme files are read from the disk. Add the files that you just created to this section.

#### 4. Add an entry to [`docs/components.js`](https://github.com/jamesplease/materialish/blob/master/docs/components.js)

This file serves as the database for components. Each object has the following properties:

* `name`: The name of the component that appears on the website's navigation, and as the heading of the component's documentation
  page.
* `url`: The URL part to use for the component. You should use a lowercase, hyphenated version of the component's name. For instance,
  `DatePicker` would be `date-picker`. This also needs to be the component's folder within the project.
* `componentKey`: Just use the `url` value.
* `description`: A sentence or two describing what the component is used for.
* `component`: The React Component to use as this Materialish Component's documentation page (I know, that is a lot to take in. You may need to read that sentence a few more times). Typically, you will just use `'src/components/component-doc'`.
* `materialDocsLink`: Sometimes, a Materialish Component will have a corresponding page on the Material website. In those situations,
  you can provide the URL here. This is optional.

#### 5. Consider creating Storybook stories

It may be worthwhile to add Storybook stories for your component, as well. Although these aren't used on the site, it could be
useful for a future developer (or a future you!) who is interested in seeing more ways to view the component.

Plus, the Storybook setup is designed as a way to test the robustness of your component. If your component displays well in
Storybook, then you can have some confidence that it was created in a robust way.

The stories can be found in the [`/stories`](https://github.com/jamesplease/materialish/tree/master/stories) directory (from
the root of the project).

### Testing your changes

The Materialish site does not use the source files in this repository: it uses a published version of Materialish. This
creates a catch-22: you want to test a component on the site, but the site requires a published version to run.

Luckily, there is a way out of this situation, [npm link](https://docs.npmjs.com/cli/link). This allows you to "link" your
local version of Materialish to the docs site, as if it were published.

To link the two, start by navigating to the root directory of the project (_not_ the `docs` directory), and run `npm run build`.
This will build the library.

Next, run `npm link`.

Now, navigate into the `docs` directory and run `npm link materialish`. Lastly, run `npm start`, and you are good to go!
