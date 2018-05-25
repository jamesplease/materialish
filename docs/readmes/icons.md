## Usage

First, identify the icon that you want to use. You can see the full list of icons
[here](https://material.io/tools/icons/?style=baseline).

Let's assume that we want the `wifi_lock` icon. Each icon's path within the
`materialish` project is prefixed with `icon-`, and underscores are replaced
with hyphens.

Accordingly, `wifi_lock` can be found at `materialish/icon-wifi-lock`:

```jsx
import IconWifiLock from 'materialish/icon-wifi-lock';
```

## Performance

You may be wondering why each icon is shipped as an individual Component, rather
than as a single one. The reason is performance: the icons are SVGs, so by providing individual
Components, you can pull in _just_ the SVG source code that you need.

If performance is not an issue for you, then you can import all of the
Components using an alternative import syntax:

```js
import { IconWifiLock } from 'materialish/icons';
```

You may find this syntax preferable from a developer experience perspective, but keep in mind that you
will likely be importing every icon that Material provides, which may have a considerable impact on your
bundle size. At present, there are roughly one thousand icons.
