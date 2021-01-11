/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	//Test Comment
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	//Test Comment
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	//Test Comment
	else if(typeof exports === 'object')
		exports["AddComponent"] = factory(require("vue"));
	//Test Comment
	else
		root["AddComponent"] = factory(root["Vue"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE_vue__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/components/Add/Add.vue?vue&type=script&lang=ts":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/components/Add/Add.vue?vue&type=script&lang=ts ***!
  \***********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Address_Address_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Address/Address.vue */ \"./src/components/Address/Address.vue\");\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({\r\n    name: 'AddComponent',\r\n    components: { AddressComponent: _Address_Address_vue__WEBPACK_IMPORTED_MODULE_1__.default },\r\n    data() {\r\n        return {\r\n            num: 1\r\n        };\r\n    },\r\n    mounted() {\r\n    },\r\n    methods: {\r\n        add() {\r\n            this.num++;\r\n        },\r\n        jian() {\r\n            this.num--;\r\n        }\r\n    }\r\n}));\r\n\n\n//# sourceURL=webpack://AddComponent/./src/components/Add/Add.vue?./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B4%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/components/Address/Address.vue?vue&type=script&lang=ts":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/components/Address/Address.vue?vue&type=script&lang=ts ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({\r\n    name: 'AddressComponent',\r\n    data() {\r\n        return {\r\n            address: '四川 - 成都'\r\n        };\r\n    },\r\n    mounted() {\r\n    },\r\n    methods: {}\r\n}));\r\n\n\n//# sourceURL=webpack://AddComponent/./src/components/Address/Address.vue?./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B4%5D.use%5B0%5D");

/***/ }),

/***/ "./src/components/Add/index.ts":
/*!*************************************!*\
  !*** ./src/components/Add/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _Add_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue */ \"./src/components/Add/Add.vue\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types */ \"./src/types.ts\");\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_types__WEBPACK_IMPORTED_MODULE_1__.SFCWithInstall)(_Add_vue__WEBPACK_IMPORTED_MODULE_0__.default));\r\n\n\n//# sourceURL=webpack://AddComponent/./src/components/Add/index.ts?");

/***/ }),

/***/ "./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SFCWithInstall\": () => /* binding */ SFCWithInstall\n/* harmony export */ });\nfunction SFCWithInstall(component) {\r\n    return Object.assign(component, {\r\n        install(app) {\r\n            app.component(component.name, component);\r\n        }\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://AddComponent/./src/types.ts?");

/***/ }),

/***/ "./src/components/Add/Add.vue":
/*!************************************!*\
  !*** ./src/components/Add/Add.vue ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _Add_vue_vue_type_template_id_edeae2da_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=edeae2da&scoped=true */ \"./src/components/Add/Add.vue?vue&type=template&id=edeae2da&scoped=true\");\n/* harmony import */ var _Add_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=ts */ \"./src/components/Add/Add.vue?vue&type=script&lang=ts\");\n\n\n\n_Add_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__.default.render = _Add_vue_vue_type_template_id_edeae2da_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render\n_Add_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = \"data-v-edeae2da\"\n/* hot reload */\nif (false) {}\n\n_Add_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__.default.__file = \"src/components/Add/Add.vue\"\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Add_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__.default);\n\n//# sourceURL=webpack://AddComponent/./src/components/Add/Add.vue?");

/***/ }),

/***/ "./src/components/Address/Address.vue":
/*!********************************************!*\
  !*** ./src/components/Address/Address.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _Address_vue_vue_type_template_id_2c941e39_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Address.vue?vue&type=template&id=2c941e39&scoped=true */ \"./src/components/Address/Address.vue?vue&type=template&id=2c941e39&scoped=true\");\n/* harmony import */ var _Address_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Address.vue?vue&type=script&lang=ts */ \"./src/components/Address/Address.vue?vue&type=script&lang=ts\");\n\n\n\n_Address_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__.default.render = _Address_vue_vue_type_template_id_2c941e39_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render\n_Address_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = \"data-v-2c941e39\"\n/* hot reload */\nif (false) {}\n\n_Address_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__.default.__file = \"src/components/Address/Address.vue\"\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Address_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__.default);\n\n//# sourceURL=webpack://AddComponent/./src/components/Address/Address.vue?");

/***/ }),

/***/ "./src/components/Add/Add.vue?vue&type=script&lang=ts":
/*!************************************************************!*\
  !*** ./src/components/Add/Add.vue?vue&type=script&lang=ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Add_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__.default\n/* harmony export */ });\n/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Add_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Add.vue?vue&type=script&lang=ts */ \"./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/components/Add/Add.vue?vue&type=script&lang=ts\");\n \n\n//# sourceURL=webpack://AddComponent/./src/components/Add/Add.vue?");

/***/ }),

/***/ "./src/components/Address/Address.vue?vue&type=script&lang=ts":
/*!********************************************************************!*\
  !*** ./src/components/Address/Address.vue?vue&type=script&lang=ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Address_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__.default\n/* harmony export */ });\n/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Address_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Address.vue?vue&type=script&lang=ts */ \"./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/components/Address/Address.vue?vue&type=script&lang=ts\");\n \n\n//# sourceURL=webpack://AddComponent/./src/components/Address/Address.vue?");

/***/ }),

/***/ "./src/components/Add/Add.vue?vue&type=template&id=edeae2da&scoped=true":
/*!******************************************************************************!*\
  !*** ./src/components/Add/Add.vue?vue&type=template&id=edeae2da&scoped=true ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => /* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Add_vue_vue_type_template_id_edeae2da_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Add_vue_vue_type_template_id_edeae2da_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Add.vue?vue&type=template&id=edeae2da&scoped=true */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/components/Add/Add.vue?vue&type=template&id=edeae2da&scoped=true\");\n\n\n//# sourceURL=webpack://AddComponent/./src/components/Add/Add.vue?");

/***/ }),

/***/ "./src/components/Address/Address.vue?vue&type=template&id=2c941e39&scoped=true":
/*!**************************************************************************************!*\
  !*** ./src/components/Address/Address.vue?vue&type=template&id=2c941e39&scoped=true ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => /* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Address_vue_vue_type_template_id_2c941e39_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Address_vue_vue_type_template_id_2c941e39_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Address.vue?vue&type=template&id=2c941e39&scoped=true */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/components/Address/Address.vue?vue&type=template&id=2c941e39&scoped=true\");\n\n\n//# sourceURL=webpack://AddComponent/./src/components/Address/Address.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/components/Add/Add.vue?vue&type=template&id=edeae2da&scoped=true":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/components/Add/Add.vue?vue&type=template&id=edeae2da&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => /* binding */ render\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n\nconst _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)(\"data-v-edeae2da\")\n\nconst render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {\n  const _component_address_component = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"address-component\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(\"div\", null, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(\"div\", {\n      class: \"red\",\n      onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.jian && _ctx.jian(...args)))\n    }, \"---\"),\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(\"div\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.num), 1 /* TEXT */),\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(\"div\", {\n      class: \"red\",\n      onClick: _cache[2] || (_cache[2] = (...args) => (_ctx.add && _ctx.add(...args)))\n    }, \"+++\"),\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_address_component)\n  ]))\n})\n\n//# sourceURL=webpack://AddComponent/./src/components/Add/Add.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B1%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B4%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/components/Address/Address.vue?vue&type=template&id=2c941e39&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/components/Address/Address.vue?vue&type=template&id=2c941e39&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => /* binding */ render\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n\nconst _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)(\"data-v-2c941e39\")\n\nconst render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(\"div\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.address), 1 /* TEXT */))\n})\n\n//# sourceURL=webpack://AddComponent/./src/components/Address/Address.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B1%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B4%5D.use%5B0%5D");

/***/ }),

/***/ "vue":
/*!******************************************************************************!*\
  !*** external {"commonjs":"vue","commonjs2":"vue","amd":"vue","root":"Vue"} ***!
  \******************************************************************************/
/***/ ((module) => {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_vue__;\n\n//# sourceURL=webpack://AddComponent/external_%7B%22commonjs%22:%22vue%22,%22commonjs2%22:%22vue%22,%22amd%22:%22vue%22,%22root%22:%22Vue%22%7D?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/components/Add/index.ts");
/******/ })()
;
});