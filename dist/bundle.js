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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var Test = function () {\n  var url = \"/dist/qa.js\";\n  var score = 0;\n\n  var loadContent = function loadContent() {\n    var xmlhttp = new XMLHttpRequest();\n\n    xmlhttp.onreadystatechange = function () {\n      if (this.readyState === 4 && this.status === 200) {\n        var questions = JSON.parse(this.responseText);\n        render(questions);\n        bindUIActions(questions);\n      }\n    };\n\n    xmlhttp.open(\"GET\", url, true);\n    xmlhttp.send();\n  };\n\n  var render = function render(questions) {\n    var source = document.getElementById(\"entry-template\").innerHTML;\n    var template = Handlebars.compile(source);\n    var compiled = template(questions);\n    document.getElementById(\"content\").innerHTML = compiled;\n  };\n\n  var evaluateSelection = function evaluateSelection(questions, currentQuestion, answerSelection) {\n    if (answerSelection === questions[\"questions\"][currentQuestion][\"c\"]) {\n      console.log(\"correct\");\n      score++;\n    } else {\n      console.log(\"wrooong!\");\n    }\n\n    console.log(Math.floor(score / questions[\"questions\"].length * 100) + \"%\");\n  };\n\n  var bindUIActions = function bindUIActions(questions) {\n    var answerSelection = document.querySelectorAll(\"[data-answer]\");\n    answerSelection.forEach(function (answer) {\n      answer.addEventListener(\"click\", function () {\n        evaluateSelection(questions, this.parentNode.getAttribute(\"data-question\"), this.textContent);\n      });\n    });\n  };\n\n  var init = function init() {\n    return loadContent();\n  };\n\n  return {\n    init: init\n  };\n}();\n\nTest.init();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });