'use strict';

import StyleSheetRegistry from 'react-native';
import StyleSheetValidation from 'react-native';
import NestedStyleSheetValidation from './stylesheet_validation';

export default class NestedStyleSheet {
  static create(obj: {[key: string]: any}): {[key: string]: number} {
    const result = {};
    for (let key in obj) {
      const styleObj = obj[key];
      const styleObjKeys = Object.keys(styleObj);

      if (Object.prototype.toString.call(styleObj[styleObjKeys[0]]) === '[object Object]') {
        NestedStyleSheetValidation.validateIsNestedStyle(styleObj);
        result[key] = NestedStyleSheet.create(styleObj);
      } else {
        StyleSheetValidation.validateStyle(key, obj);
        result[key] = StyleSheetRegistry.registerStyle(styleObj);
      }
    }
    return result;
  }
}
