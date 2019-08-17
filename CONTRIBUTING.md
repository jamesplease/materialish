# Contributing

> :wave: Hey there! Thanks for your interest in helping out. If you happen to
> run into any issues following this guide, please
> [open an issue](https://github.com/jamesplease/materialish/issues/new?title=Contributing+help),
> and we'll do our best to help out.

To begin contributing, you'll need to

1. Fork the Materialish repository on Github.
2. Clone your fork to your machine `git clone git@github.com:<YOUR-USER-NAME>/materialish.git`.
3. Navigate into project directory `cd materialish/`.
4. Install the dependencies `npm install`.
5. Create a branch `git checkout -b feature/new-contribute`.
6. Make your Magic, then push to GitHub `git push --set-upstream origin feature/new-contribute`.
7. Open GitHub and submit your Pull Request.

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

1. Navigate into the docs folder `cd docs/`.
2. Install the dependencies that are specific to the docs `npm install`
3. Run the site locally `npm start`

The terminal will let you know the URL of your locally-running site.

> Heads up: the website is a bit complex from a developer's perspective right now. We prioritized getting it working over making it the simplest it could possibly be. If you're trying to make a change, but are unable to,
> please [reach out](https://github.com/jamesplease/materialish/issues/new?title=Contributing+help) and we'll do our best to help you get things working.

### One More Thing...

Thanks again!
