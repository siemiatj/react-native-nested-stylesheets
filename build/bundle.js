/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _invariant=__webpack_require__(3);var _invariant2=_interopRequireDefault(_invariant);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}var\n\nNestedStyleSheetValidation=function(){function NestedStyleSheetValidation(){_classCallCheck(this,NestedStyleSheetValidation);}_createClass(NestedStyleSheetValidation,null,[{key:'validateNestedStyle',value:function validateNestedStyle(\nnestedStyles){\nif(!__DEV__){\nreturn;\n}\n\n\n\nfor(var _iterator=Object.keys(nestedStyles),_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var prop=_ref;\nvar styleObj=nestedStyles[prop];\nif(Object.prototype.toString.call(styleObj)!=='[object Object]'){\nstyleError('\"'+styleObj+'\" is not a plain Javascript object',prop,'StyleSheet  '+\nprop,'Parents of nested styles can only have plain \\\n          Javascript objects ({...}) as children');\n}\n}\n}}]);return NestedStyleSheetValidation;}();exports.default=NestedStyleSheetValidation;\n\n\nvar styleError=function styleError(message1,style){var caller=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'<<unknown>>';var message2=arguments.length>3&&arguments[3]!==undefined?arguments[3]:'';\n(0,_invariant2.default)(\nfalse,\nmessage1+'\\n'+caller+': '+JSON.stringify(style,null,'  ')+message2);\n\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzaGVldF92YWxpZGF0aW9uLmpzP2M2YzciXSwibmFtZXMiOlsiTmVzdGVkU3R5bGVTaGVldFZhbGlkYXRpb24iLCJuZXN0ZWRTdHlsZXMiLCJfX0RFVl9fIiwiT2JqZWN0Iiwia2V5cyIsInByb3AiLCJzdHlsZU9iaiIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsInN0eWxlRXJyb3IiLCJtZXNzYWdlMSIsInN0eWxlIiwiY2FsbGVyIiwibWVzc2FnZTIiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoidWpCQUFBLHNDOztBQUVxQkEsMEI7QUFDUUMsWSxDQUFjO0FBQ3ZDLEdBQUksQ0FBQ0MsT0FBTCxDQUFjO0FBQ1Y7QUFDSDs7OztBQUlELGtCQUFpQkMsT0FBT0MsSUFBUCxDQUFZSCxZQUFaLENBQWpCLDRJQUE0Qyx1SUFBbkNJLEtBQW1DO0FBQzFDLEdBQU1DLFVBQVdMLGFBQWFJLElBQWIsQ0FBakI7QUFDQSxHQUFJRixPQUFPSSxTQUFQLENBQWlCQyxRQUFqQixDQUEwQkMsSUFBMUIsQ0FBK0JILFFBQS9CLElBQTZDLGlCQUFqRCxDQUFvRTtBQUNsRUksZUFBZUosUUFBZixzQ0FBNkRELElBQTdEO0FBQ2lCQSxJQURqQixDQUN5QjtpREFEekI7QUFHRDtBQUNGO0FBQ0YsQywwREFoQmtCTCwwQjs7O0FBbUJyQixHQUFNVSxZQUFhLFFBQWJBLFdBQWEsQ0FBU0MsUUFBVCxDQUFtQkMsS0FBbkIsQ0FBaUUsSUFBdkNDLE9BQXVDLDJEQUE5QixhQUE4QixJQUFmQyxTQUFlLDJEQUFKLEVBQUk7QUFDbEY7QUFDRSxLQURGO0FBRUtILFFBRkwsTUFFa0JFLE1BRmxCLE1BRTZCRSxLQUFLQyxTQUFMLENBQWVKLEtBQWYsQ0FBc0IsSUFBdEIsQ0FBNEIsSUFBNUIsQ0FGN0IsQ0FFaUVFLFFBRmpFOztBQUlELENBTEQiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpbnZhcmlhbnQgZnJvbSAnaW52YXJpYW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmVzdGVkU3R5bGVTaGVldFZhbGlkYXRpb24ge1xuICBzdGF0aWMgdmFsaWRhdGVOZXN0ZWRTdHlsZShuZXN0ZWRTdHlsZXMpIHtcbiAgICBpZiAoIV9fREVWX18pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGlmIHlvdSBhcmUgbmVzdGluZyBzdHlsZXMgbm8gcGFyZW50IGVsZW1lbnQgbWF5IGhhdmUgYW55dGhpbmcgYnV0XG4gICAgLy8gb2JqZWN0cyAoe30pIGFzIGNoaWxkcmVuXG4gICAgZm9yIChsZXQgcHJvcCBvZiBPYmplY3Qua2V5cyhuZXN0ZWRTdHlsZXMpKSB7XG4gICAgICBjb25zdCBzdHlsZU9iaiA9IG5lc3RlZFN0eWxlc1twcm9wXTtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3R5bGVPYmopICE9PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgICAgICBzdHlsZUVycm9yKGBcIiR7c3R5bGVPYmp9XCIgaXMgbm90IGEgcGxhaW4gSmF2YXNjcmlwdCBvYmplY3RgLCBwcm9wLFxuICAgICAgICAgIGBTdHlsZVNoZWV0ICAke3Byb3B9YCwgJ1BhcmVudHMgb2YgbmVzdGVkIHN0eWxlcyBjYW4gb25seSBoYXZlIHBsYWluIFxcXG4gICAgICAgICAgSmF2YXNjcmlwdCBvYmplY3RzICh7Li4ufSkgYXMgY2hpbGRyZW4nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgc3R5bGVFcnJvciA9IGZ1bmN0aW9uKG1lc3NhZ2UxLCBzdHlsZSwgY2FsbGVyID0gJzw8dW5rbm93bj4+JywgbWVzc2FnZTIgPSAnJykge1xuICBpbnZhcmlhbnQoXG4gICAgZmFsc2UsXG4gICAgYCR7bWVzc2FnZTF9XFxuJHtjYWxsZXJ9OiAke0pTT04uc3RyaW5naWZ5KHN0eWxlLCBudWxsLCAnICAnKX0ke21lc3NhZ2UyfWAsXG4gICk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0eWxlc2hlZXRfdmFsaWRhdGlvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-native/Libraries/Renderer/src/renderers/native/ReactNativePropRegistry\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1uYXRpdmUvTGlicmFyaWVzL1JlbmRlcmVyL3NyYy9yZW5kZXJlcnMvbmF0aXZlL1JlYWN0TmF0aXZlUHJvcFJlZ2lzdHJ5XCI/MmJiMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbmF0aXZlL0xpYnJhcmllcy9SZW5kZXJlci9zcmMvcmVuZGVyZXJzL25hdGl2ZS9SZWFjdE5hdGl2ZVByb3BSZWdpc3RyeVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LW5hdGl2ZS9MaWJyYXJpZXMvUmVuZGVyZXIvc3JjL3JlbmRlcmVycy9uYXRpdmUvUmVhY3ROYXRpdmVQcm9wUmVnaXN0cnlcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-native/Libraries/StyleSheet/StyleSheetValidation\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1uYXRpdmUvTGlicmFyaWVzL1N0eWxlU2hlZXQvU3R5bGVTaGVldFZhbGlkYXRpb25cIj9kODI4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1uYXRpdmUvTGlicmFyaWVzL1N0eWxlU2hlZXQvU3R5bGVTaGVldFZhbGlkYXRpb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1uYXRpdmUvTGlicmFyaWVzL1N0eWxlU2hlZXQvU3R5bGVTaGVldFZhbGlkYXRpb25cIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

eval("module.exports = require(\"invariant\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbnZhcmlhbnRcIj80YjMxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbnZhcmlhbnRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJpbnZhcmlhbnRcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();\n\nvar _StyleSheetValidation=__webpack_require__(2);var _StyleSheetValidation2=_interopRequireDefault(_StyleSheetValidation);\nvar _ReactNativePropRegistry=__webpack_require__(1);var _ReactNativePropRegistry2=_interopRequireDefault(_ReactNativePropRegistry);\nvar _stylesheet_validation=__webpack_require__(0);var _stylesheet_validation2=_interopRequireDefault(_stylesheet_validation);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}var\n\nNestedStyleSheet=function(){function NestedStyleSheet(){_classCallCheck(this,NestedStyleSheet);}_createClass(NestedStyleSheet,null,[{key:'create',value:function create(\nobj){\nvar result={};\nfor(var _key in obj){\nvar styleObj=obj[_key];\nvar styleObjKeys=Object.keys(styleObj);\n\nif(Object.prototype.toString.call(styleObj[styleObjKeys[0]])==='[object Object]'){\n_stylesheet_validation2.default.validateNestedStyle(styleObj);\nresult[_key]=NestedStyleSheet.create(styleObj);\n}else{\n_StyleSheetValidation2.default.validateStyle(_key,obj);\nresult[_key]=_ReactNativePropRegistry2.default.register(styleObj);\n}\n}\n\nreturn result;\n}}]);return NestedStyleSheet;}();exports.default=NestedStyleSheet;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJOZXN0ZWRTdHlsZVNoZWV0Iiwib2JqIiwicmVzdWx0Iiwia2V5Iiwic3R5bGVPYmoiLCJzdHlsZU9iaktleXMiLCJPYmplY3QiLCJrZXlzIiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwidmFsaWRhdGVOZXN0ZWRTdHlsZSIsImNyZWF0ZSIsInZhbGlkYXRlU3R5bGUiLCJyZWdpc3RlciJdLCJtYXBwaW5ncyI6Ijs7QUFFQSxpRDtBQUNBLG9EO0FBQ0Esa0Q7O0FBRXFCQSxnQjtBQUNMQyxHLENBQW9EO0FBQ2hFLEdBQU1DLFFBQVMsRUFBZjtBQUNBLElBQUssR0FBSUMsS0FBVCxHQUFnQkYsSUFBaEIsQ0FBcUI7QUFDbkIsR0FBTUcsVUFBV0gsSUFBSUUsSUFBSixDQUFqQjtBQUNBLEdBQU1FLGNBQWVDLE9BQU9DLElBQVAsQ0FBWUgsUUFBWixDQUFyQjs7QUFFQSxHQUFJRSxPQUFPRSxTQUFQLENBQWlCQyxRQUFqQixDQUEwQkMsSUFBMUIsQ0FBK0JOLFNBQVNDLGFBQWEsQ0FBYixDQUFULENBQS9CLElBQThELGlCQUFsRSxDQUFxRjtBQUNuRixnQ0FBMkJNLG1CQUEzQixDQUErQ1AsUUFBL0M7QUFDQUYsT0FBT0MsSUFBUCxFQUFjSCxpQkFBaUJZLE1BQWpCLENBQXdCUixRQUF4QixDQUFkO0FBQ0QsQ0FIRCxJQUdPO0FBQ0wsK0JBQXFCUyxhQUFyQixDQUFtQ1YsSUFBbkMsQ0FBd0NGLEdBQXhDO0FBQ0FDLE9BQU9DLElBQVAsRUFBYyxrQ0FBd0JXLFFBQXhCLENBQWlDVixRQUFqQyxDQUFkO0FBQ0Q7QUFDRjs7QUFFRCxNQUFPRixPQUFQO0FBQ0QsQyxnREFqQmtCRixnQiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgU3R5bGVTaGVldFZhbGlkYXRpb24gZnJvbSAncmVhY3QtbmF0aXZlL0xpYnJhcmllcy9TdHlsZVNoZWV0L1N0eWxlU2hlZXRWYWxpZGF0aW9uJztcbmltcG9ydCBSZWFjdE5hdGl2ZVByb3BSZWdpc3RyeSBmcm9tICdyZWFjdC1uYXRpdmUvTGlicmFyaWVzL1JlbmRlcmVyL3NyYy9yZW5kZXJlcnMvbmF0aXZlL1JlYWN0TmF0aXZlUHJvcFJlZ2lzdHJ5JztcbmltcG9ydCBOZXN0ZWRTdHlsZVNoZWV0VmFsaWRhdGlvbiBmcm9tICcuL3N0eWxlc2hlZXRfdmFsaWRhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5lc3RlZFN0eWxlU2hlZXQge1xuICBzdGF0aWMgY3JlYXRlKG9iajoge1trZXk6IHN0cmluZ106IGFueX0pOiB7W2tleTogc3RyaW5nXTogbnVtYmVyfSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZm9yIChsZXQga2V5IGluIG9iaikge1xuICAgICAgY29uc3Qgc3R5bGVPYmogPSBvYmpba2V5XTtcbiAgICAgIGNvbnN0IHN0eWxlT2JqS2V5cyA9IE9iamVjdC5rZXlzKHN0eWxlT2JqKTtcblxuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzdHlsZU9ialtzdHlsZU9iaktleXNbMF1dKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICAgICAgTmVzdGVkU3R5bGVTaGVldFZhbGlkYXRpb24udmFsaWRhdGVOZXN0ZWRTdHlsZShzdHlsZU9iaik7XG4gICAgICAgIHJlc3VsdFtrZXldID0gTmVzdGVkU3R5bGVTaGVldC5jcmVhdGUoc3R5bGVPYmopO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgU3R5bGVTaGVldFZhbGlkYXRpb24udmFsaWRhdGVTdHlsZShrZXksIG9iaik7XG4gICAgICAgIHJlc3VsdFtrZXldID0gUmVhY3ROYXRpdmVQcm9wUmVnaXN0cnkucmVnaXN0ZXIoc3R5bGVPYmopO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);