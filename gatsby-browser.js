// TODO: Setting Prism Theme
// Theme Types Link : https://github.com/PrismJS/prism/tree/1d5047df37aacc900f8270b1c6215028f6988eb1/themes
import 'prismjs/themes/prism-okaidia.css';

import React from 'react';
import { RecoilRoot } from 'recoil';

export const wrapPageElement = function ({ element, props }) {
  return <RecoilRoot {...props}>{element}</RecoilRoot>;
};
