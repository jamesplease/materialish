# Build Scripts

Because of the way that Materialish is distributed, we need to place any file that ends in
`.js` or `.css` somewhere other than the root directory. This is a good place.

The reason for this is because we want to allow consumers to use Materialish like so:

```js
import Button from 'materialish/button';
```

This requires that `button.js` be in the root directory of the npm package, so we added
`./*.js` to the package.json `files` array.
