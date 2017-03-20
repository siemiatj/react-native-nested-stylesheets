'use strict';

import StyleSheetValidation from 'react-native/Libraries/StyleSheet/StyleSheetValidation';
import ReactNativePropRegistry from 'react-native/Libraries/Renderer/src/renderers/native/ReactNativePropRegistry';
import NestedStyleSheetValidation from './stylesheet_validation';

export default class NestedStyleSheet {
  static create(obj: {[key: string]: any}): {[key: string]: number} {
    const result = {};
    for (let key in obj) {
      const styleObj = obj[key];
      const styleObjKeys = Object.keys(styleObj);

      if (Object.prototype.toString.call(styleObj[styleObjKeys[0]]) === '[object Object]') {
        NestedStyleSheetValidation.validateNestedStyle(styleObj);
        result[key] = NestedStyleSheet.create(styleObj);
      } else {
        StyleSheetValidation.validateStyle(key, obj);
        result[key] = ReactNativePropRegistry.register(styleObj);
      }
    }

    return result;
  }
}
