# @developer-week/babel-preset

Automatically load the css for the @developer-week design system.

## Installation

```sh
npm i --save-dev @developer-week/babel-preset
# or
yarn add -D @developer-week/babel-preset
```

## Usage

.babelrc:

```json
{
  "presets": ["@developer-week/babel-preset"]
}
```

## Example

Input:

```js
import Card from '@developer-week/card';
```

Output:

```js
import Card from '@developer-week/card';
import '@developer-week/card/dist/main.css';
```
