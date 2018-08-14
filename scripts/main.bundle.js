/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar Proto = document.querySelector(\"#Proto\");\nvar protoWrap = document.querySelector(\".proto-wrap\");\nvar proto_ = document.querySelector(\".protoio-embed-prototype\");\nvar typography = document.querySelector(\".typography\");\nvar phoneImage = document.querySelector(\".typography__img\");\n\nphoneImage.style.display = \"none\";\n\nwindow.onload = function () {\n  proto_.style.display = \"none\";\n  proto_.style.opacity = \"1\";\n  phoneImage.style.display = \"inherit\";\n\n  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {\n    Proto.addEventListener(\"click\", handleMobile);\n  } else {\n    Proto.addEventListener(\"click\", handleDesk);\n  }\n};\n\nfunction handleDesk(e) {\n  e.preventDefault();\n\n  if (document.documentElement.clientWidth < 768) {\n    proto_.style.top = \"-12%\";\n  } else if (document.documentElement.clientWidth < 992) {\n    protoWrap.style.marginBottom = \"-200px\";\n  } else if (document.documentElement.clientWidth < 1200) {\n    protoWrap.style.marginBottom = \"-101px\";\n  }\n\n  typography.style.padding = \"0\";\n  phoneImage.style.display = \"none\";\n  proto_.style.display = \"block\";\n}\n\nfunction handleMobile(e) {\n  e.preventDefault();\n  console.log(\"mobile\");\n\n  proto_.style.display = \"block\";\n  proto_.classList.add(\"phones\");\n  proto_.style.height = \"auto\";\n  proto_.style.top = \"0\";\n}\n\n//# sourceURL=webpack:///./src/scripts/main.js?");

/***/ })

/******/ });