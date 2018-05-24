## Usage

```jsx
import { Avatar } from 'materialish';
import 'materialish/avatar.css';
```

## Props

| Prop Name | Default Value | Required | Description                                              |
| --------- | ------------- | -------- | -------------------------------------------------------- |
| className |               | No       | Additional class name(s) to add to the Avatar            |
| image     |               | No       | The URL for the user's picture                           |
| initials  |               | No       | The user's initials                                      |
| ...rest   |               | No       | Other props are placed on the root element of the Avatar |

## CSS Variables

| Variable                    | Default Value | Description                                                            |
| --------------------------- | ------------- | ---------------------------------------------------------------------- |
| --mt-baseFontSize           | 1rem          | The text size and dimensions of the avatar are based off of this value |
| --mt-fontFamily             | 'Roboto'      | The font family to use for text                                        |
| --mt-avatar-backgroundColor | #ccc          | The background color of the avatar                                     |
| --mt-avatar-color           | #333          | The text color of the avatar                                           |
