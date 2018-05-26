## Usage

First, identify the icon that you want to use. You can see the full list of icons
[here](/materialish/icons/catalog).

Let's assume that we want the `wifi_lock` icon. Each icon's path within the
`materialish` project is prefixed with `icon-`, and underscores are replaced
with hyphens.

Accordingly, `wifi_lock` can be found at `materialish/icon-wifi-lock`:

```jsx
import IconWifiLock from 'materialish/icon-wifi-lock';
```

## Props

| Prop Name | Default Value | Required | Description                                      |
| --------- | ------------- | -------- | ------------------------------------------------ |
| size      | "1rem"        | No       | The size of the SVG                              |
| ...rest   |               | No       | Other props are placed on the root `svg` element |

## Performance

You may be wondering why each icon is shipped as an individual Component, rather
than as a single one. The reason is performance. Providing individual
Components allows you to pull in _just_ the SVG code that you need.

If performance is not an issue for you, then you can opt into importing all of the
Components using an alternative import syntax:

```js
import { IconWifiLock } from 'materialish/icons';
```

You may find this syntax preferable from a developer experience perspective, but keep in mind that you
will likely be importing every icon that Material provides. This could have a considerable impact on your
bundle size, as there are roughly one thousand icons.