# Disable Page Scroll
[![NPM version](https://img.shields.io/npm/v/disable-page-scroll.svg?style=flat)](https://www.npmjs.com/package/disable-page-scroll)
[![NPM downloads](https://img.shields.io/npm/dm/disable-page-scroll.svg?style=flat)](https://www.npmjs.com/package/disable-page-scroll)
[![Dependency Status](https://img.shields.io/david/hcodes/disable-page-scroll.svg?style=flat)](https://david-dm.org/hcodes/disable-page-scroll)

Disable page scroll in browsers on mobile phones.

Especially for Mobile Safari on iOS with iframes.

## Install
```
npm i --save disable-page-scroll
```

## Using
```js
import { disablePageScroll, enablePageScroll } from 'disable-page-scroll';
import 'disable-page-scroll/dist/index.css';

disablePageScroll();
//...
enablePageScroll();
```

## [License](./LICENSE)
