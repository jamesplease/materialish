# Contributing

> :wave: Hey there! Thanks for your interest in helping out. If you happen to
> run into any issues following this guide, please
> [open an issue](https://github.com/jamesplease/materialish/issues/new?title=Contributing+help),
> and we'll do our best to help out.

To begin contributing, you'll first need to
[clone this repository](https://help.github.com/articles/cloning-a-repository/),
then navigate into the repository's directory.

```
git clone git@github.com:jamesplease/materialish.git

cd materialish
```

Next, install the dependencies using [npm](https://www.npmjs.com/).

```
npm install
```

Awesome – you're ready to contribute!

### Contributing to the Code

The source files can be found in `./src`.

Examples can be found in `./stories`. These examples are part of a [storybook](https://storybook.js.org/).
To run the storybook, execute the command:

```
npm run storybook
```

As you make changes to the source code, the storybook will update automatically.

### Contributing to the Docs

The documentation can be found in `./docs`. There is an additional installation step to update the docs.

First, navigate into the docs folder:

```
cd docs
```

Then, install the dependencies that are specific to the docs:

```
npm install
```

Once that's done, you can now run the site locally. To do that, execute this command:

```
npm start
```

The terminal will let you know the URL of your locally-running site.

> Heads up: the website is a bit complex from a developer's perspective right now. We prioritized getting it working over making it the simplest it could possibly be. If you're trying to make a change, but are unable to,
> please [reach out](https://github.com/jamesplease/materialish/issues/new?title=Contributing+help) and we'll do our best to help you get things working.

### One More Thing...

Thanks again!
