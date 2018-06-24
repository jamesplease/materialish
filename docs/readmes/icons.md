## Usage

First, identify the icon that you want to use. You can see the full list of icons
in [**the catalog**](/icons/catalog).

Material provides nearly one thousand icons, so it can be useful to narrow your results
using the filter functionality.

Once you find an icon, you can click it to see the import statement that you can use
in your code.

Let's assume that we want an icon related to wifi. After typing "wifi" into the
search box, we can see the one that we want: `IconWifiLock`.

Clicking it shows us the import statement:

```jsx
import IconWifiLock from 'materialish/icon-wifi-lock';
```

From here, we can use it as we would any other React component. And remember, because the icons are
SVG, you do not need to load any CSS to use them.

## Props

| Prop Name | Default Value | Required | Description                                      |
| --------- | ------------- | -------- | ------------------------------------------------ |
| size      | "1em"         | No       | The size of the SVG                              |
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
