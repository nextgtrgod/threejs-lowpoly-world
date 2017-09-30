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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:!0});var colors=exports.colors={lightGreen:10335008,darkGreen:5350690,lightBrown:16767913,darkBronw:13669759,wood:10972695,sky:8435420,darkGrey:7496554,lightGrey:14465972};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2NvbG9ycy5qcz9kMDUxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBjb2xvcnM9ZXhwb3J0cy5jb2xvcnM9e2xpZ2h0R3JlZW46MTAzMzUwMDgsZGFya0dyZWVuOjUzNTA2OTAsbGlnaHRCcm93bjoxNjc2NzkxMyxkYXJrQnJvbnc6MTM2Njk3NTksd29vZDoxMDk3MjY5NSxza3k6ODQzNTQyMCxkYXJrR3JleTo3NDk2NTU0LGxpZ2h0R3JleToxNDQ2NTk3Mn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlcy9jb2xvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,'__esModule',{value:!0});var _three=__webpack_require__(0),_colors=__webpack_require__(1);function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}var Cube=function a(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:[100,100,100],c=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{x:0,y:0,z:0},d=2<arguments.length&&arguments[2]!==void 0?arguments[2]:0,e=3<arguments.length&&arguments[3]!==void 0?arguments[3]:'cube-'+1e3*Math.random();_classCallCheck(this,a),this.width=b[0],this.height=b[1],this.depth=b[2],this.color=d,this.geometry=new _three.BoxGeometry(this.width,this.height,this.depth),this.material=new _three.MeshPhongMaterial({color:this.color,flatShading:!0}),this.mesh=new _three.Mesh(this.geometry,this.material),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.position.x+=c.x,this.mesh.position.y+=c.y,this.mesh.position.z+=c.z};exports.default=Cube;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0N1YmUuanM/YmEwOCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsJ19fZXNNb2R1bGUnLHt2YWx1ZTohMH0pO3ZhciBfdGhyZWU9cmVxdWlyZSgndGhyZWUnKSxfY29sb3JzPXJlcXVpcmUoJy4vY29sb3JzJyk7ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGEsYil7aWYoIShhIGluc3RhbmNlb2YgYikpdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyl9dmFyIEN1YmU9ZnVuY3Rpb24gYSgpe3ZhciBiPTA8YXJndW1lbnRzLmxlbmd0aCYmYXJndW1lbnRzWzBdIT09dm9pZCAwP2FyZ3VtZW50c1swXTpbMTAwLDEwMCwxMDBdLGM9MTxhcmd1bWVudHMubGVuZ3RoJiZhcmd1bWVudHNbMV0hPT12b2lkIDA/YXJndW1lbnRzWzFdOnt4OjAseTowLHo6MH0sZD0yPGFyZ3VtZW50cy5sZW5ndGgmJmFyZ3VtZW50c1syXSE9PXZvaWQgMD9hcmd1bWVudHNbMl06MCxlPTM8YXJndW1lbnRzLmxlbmd0aCYmYXJndW1lbnRzWzNdIT09dm9pZCAwP2FyZ3VtZW50c1szXTonY3ViZS0nKzFlMypNYXRoLnJhbmRvbSgpO19jbGFzc0NhbGxDaGVjayh0aGlzLGEpLHRoaXMud2lkdGg9YlswXSx0aGlzLmhlaWdodD1iWzFdLHRoaXMuZGVwdGg9YlsyXSx0aGlzLmNvbG9yPWQsdGhpcy5nZW9tZXRyeT1uZXcgX3RocmVlLkJveEdlb21ldHJ5KHRoaXMud2lkdGgsdGhpcy5oZWlnaHQsdGhpcy5kZXB0aCksdGhpcy5tYXRlcmlhbD1uZXcgX3RocmVlLk1lc2hQaG9uZ01hdGVyaWFsKHtjb2xvcjp0aGlzLmNvbG9yLGZsYXRTaGFkaW5nOiEwfSksdGhpcy5tZXNoPW5ldyBfdGhyZWUuTWVzaCh0aGlzLmdlb21ldHJ5LHRoaXMubWF0ZXJpYWwpLHRoaXMubWVzaC5jYXN0U2hhZG93PSEwLHRoaXMubWVzaC5yZWNlaXZlU2hhZG93PSEwLHRoaXMubWVzaC5wb3NpdGlvbi54Kz1jLngsdGhpcy5tZXNoLnBvc2l0aW9uLnkrPWMueSx0aGlzLm1lc2gucG9zaXRpb24ueis9Yy56fTtleHBvcnRzLmRlZmF1bHQ9Q3ViZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL0N1YmUuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("var _main=__webpack_require__(4),_main2=_interopRequireDefault(_main),_init=__webpack_require__(5),_init2=_interopRequireDefault(_init);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}window.addEventListener('load',function(){(0,_init2.default)()});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAuanM/MGFiOCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7dmFyIF9tYWluPXJlcXVpcmUoJy4vc3R5bGVzL21haW4uc3R5bCcpLF9tYWluMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYWluKSxfaW5pdD1yZXF1aXJlKCcuL21vZHVsZXMvaW5pdCcpLF9pbml0Mj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbml0KTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGEpe3JldHVybiBhJiZhLl9fZXNNb2R1bGU/YTp7ZGVmYXVsdDphfX13aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsZnVuY3Rpb24oKXsoMCxfaW5pdDIuZGVmYXVsdCkoKX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5zdHlsP2E3ZjciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvbWFpbi5zdHlsXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,'__esModule',{value:!0}),exports.default=init;var _createScene=__webpack_require__(6),_createScene2=_interopRequireDefault(_createScene),_createCamera=__webpack_require__(7),_createCamera2=_interopRequireDefault(_createCamera),_createRenderer=__webpack_require__(8),_createRenderer2=_interopRequireDefault(_createRenderer),_createLights=__webpack_require__(9),_createLights2=_interopRequireDefault(_createLights),_BottomIsland=__webpack_require__(10),_BottomIsland2=_interopRequireDefault(_BottomIsland),_MiddleIsland=__webpack_require__(11),_MiddleIsland2=_interopRequireDefault(_MiddleIsland),_TopIsland=__webpack_require__(12),_TopIsland2=_interopRequireDefault(_TopIsland);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function init(){function a(){e.render(c,d),requestAnimationFrame(a)}var b=Math.PI,c=(0,_createScene2.default)(),d=(0,_createCamera2.default)(),e=(0,_createRenderer2.default)();(0,_createLights2.default)(c);var f=new _BottomIsland2.default().mesh,g=new _MiddleIsland2.default().mesh,h=new _TopIsland2.default().mesh;f.rotation.y=-b/4,f.rotation.x=b/8,g.rotation.y=-b/4,g.rotation.x=b/8,h.rotation.y=-b/4,h.rotation.x=b/8,c.add(f,g,h);a();var i=new dat.GUI({autoplace:!1}),j=document.getElementById('gui');j.appendChild(i.domElement);var k=i.addFolder('camera position');k.add(d.position,'x',-500,500),k.add(d.position,'y',-500,500),k.add(d.position,'z',-1500,1500),k.open()}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2luaXQuanM/NjRlNiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsJ19fZXNNb2R1bGUnLHt2YWx1ZTohMH0pLGV4cG9ydHMuZGVmYXVsdD1pbml0O3ZhciBfY3JlYXRlU2NlbmU9cmVxdWlyZSgnLi9jcmVhdGVTY2VuZScpLF9jcmVhdGVTY2VuZTI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlU2NlbmUpLF9jcmVhdGVDYW1lcmE9cmVxdWlyZSgnLi9jcmVhdGVDYW1lcmEnKSxfY3JlYXRlQ2FtZXJhMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDYW1lcmEpLF9jcmVhdGVSZW5kZXJlcj1yZXF1aXJlKCcuL2NyZWF0ZVJlbmRlcmVyJyksX2NyZWF0ZVJlbmRlcmVyMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVSZW5kZXJlciksX2NyZWF0ZUxpZ2h0cz1yZXF1aXJlKCcuL2NyZWF0ZUxpZ2h0cycpLF9jcmVhdGVMaWdodHMyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUxpZ2h0cyksX0JvdHRvbUlzbGFuZD1yZXF1aXJlKCcuLi9zY2VuZU9iamVjdHMvQm90dG9tSXNsYW5kL0JvdHRvbUlzbGFuZCcpLF9Cb3R0b21Jc2xhbmQyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0JvdHRvbUlzbGFuZCksX01pZGRsZUlzbGFuZD1yZXF1aXJlKCcuLi9zY2VuZU9iamVjdHMvTWlkZGxlSXNsYW5kL01pZGRsZUlzbGFuZCcpLF9NaWRkbGVJc2xhbmQyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01pZGRsZUlzbGFuZCksX1RvcElzbGFuZD1yZXF1aXJlKCcuLi9zY2VuZU9iamVjdHMvVG9wSXNsYW5kL1RvcElzbGFuZCcpLF9Ub3BJc2xhbmQyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RvcElzbGFuZCk7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChhKXtyZXR1cm4gYSYmYS5fX2VzTW9kdWxlP2E6e2RlZmF1bHQ6YX19ZnVuY3Rpb24gaW5pdCgpe2Z1bmN0aW9uIGEoKXtlLnJlbmRlcihjLGQpLHJlcXVlc3RBbmltYXRpb25GcmFtZShhKX12YXIgYj1NYXRoLlBJLGM9KDAsX2NyZWF0ZVNjZW5lMi5kZWZhdWx0KSgpLGQ9KDAsX2NyZWF0ZUNhbWVyYTIuZGVmYXVsdCkoKSxlPSgwLF9jcmVhdGVSZW5kZXJlcjIuZGVmYXVsdCkoKTsoMCxfY3JlYXRlTGlnaHRzMi5kZWZhdWx0KShjKTt2YXIgZj1uZXcgX0JvdHRvbUlzbGFuZDIuZGVmYXVsdCgpLm1lc2gsZz1uZXcgX01pZGRsZUlzbGFuZDIuZGVmYXVsdCgpLm1lc2gsaD1uZXcgX1RvcElzbGFuZDIuZGVmYXVsdCgpLm1lc2g7Zi5yb3RhdGlvbi55PS1iLzQsZi5yb3RhdGlvbi54PWIvOCxnLnJvdGF0aW9uLnk9LWIvNCxnLnJvdGF0aW9uLng9Yi84LGgucm90YXRpb24ueT0tYi80LGgucm90YXRpb24ueD1iLzgsYy5hZGQoZixnLGgpO2EoKTt2YXIgaT1uZXcgZGF0LkdVSSh7YXV0b3BsYWNlOiExfSksaj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3VpJyk7ai5hcHBlbmRDaGlsZChpLmRvbUVsZW1lbnQpO3ZhciBrPWkuYWRkRm9sZGVyKCdjYW1lcmEgcG9zaXRpb24nKTtrLmFkZChkLnBvc2l0aW9uLCd4JywtNTAwLDUwMCksay5hZGQoZC5wb3NpdGlvbiwneScsLTUwMCw1MDApLGsuYWRkKGQucG9zaXRpb24sJ3onLC0xNTAwLDE1MDApLGsub3BlbigpfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvaW5pdC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,'__esModule',{value:!0}),exports.default=createScene;var _three=__webpack_require__(0),_colors=__webpack_require__(1);function createScene(){var a=window.innerHeight,b=window.innerWidth,c=new _three.Scene;return c}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2NyZWF0ZVNjZW5lLmpzPzM4NzMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCdfX2VzTW9kdWxlJyx7dmFsdWU6ITB9KSxleHBvcnRzLmRlZmF1bHQ9Y3JlYXRlU2NlbmU7dmFyIF90aHJlZT1yZXF1aXJlKCd0aHJlZScpLF9jb2xvcnM9cmVxdWlyZSgnLi9jb2xvcnMnKTtmdW5jdGlvbiBjcmVhdGVTY2VuZSgpe3ZhciBhPXdpbmRvdy5pbm5lckhlaWdodCxiPXdpbmRvdy5pbm5lcldpZHRoLGM9bmV3IF90aHJlZS5TY2VuZTtyZXR1cm4gY31cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL2NyZWF0ZVNjZW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,'__esModule',{value:!0}),exports.default=createCamera;var _three=__webpack_require__(0);function createCamera(){var a=window.innerHeight,b=window.innerWidth,c=new _three.PerspectiveCamera(50,b/a,1,1e4);return c.position.x=0,c.position.y=100,c.position.z=950,c}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2NyZWF0ZUNhbWVyYS5qcz9hM2YwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywnX19lc01vZHVsZScse3ZhbHVlOiEwfSksZXhwb3J0cy5kZWZhdWx0PWNyZWF0ZUNhbWVyYTt2YXIgX3RocmVlPXJlcXVpcmUoJ3RocmVlJyk7ZnVuY3Rpb24gY3JlYXRlQ2FtZXJhKCl7dmFyIGE9d2luZG93LmlubmVySGVpZ2h0LGI9d2luZG93LmlubmVyV2lkdGgsYz1uZXcgX3RocmVlLlBlcnNwZWN0aXZlQ2FtZXJhKDUwLGIvYSwxLDFlNCk7cmV0dXJuIGMucG9zaXRpb24ueD0wLGMucG9zaXRpb24ueT0xMDAsYy5wb3NpdGlvbi56PTk1MCxjfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvY3JlYXRlQ2FtZXJhLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,'__esModule',{value:!0}),exports.default=createRenderer;var _three=__webpack_require__(0);function createRenderer(){var a=window.innerHeight,b=window.innerWidth,c=new _three.WebGLRenderer({alpha:!0,antialias:!1});c.setSize(b,a),c.shadowMap.enabled=!0;var d=document.getElementById('world');return d.appendChild(c.domElement),c}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2NyZWF0ZVJlbmRlcmVyLmpzPzU0MzYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCdfX2VzTW9kdWxlJyx7dmFsdWU6ITB9KSxleHBvcnRzLmRlZmF1bHQ9Y3JlYXRlUmVuZGVyZXI7dmFyIF90aHJlZT1yZXF1aXJlKCd0aHJlZScpO2Z1bmN0aW9uIGNyZWF0ZVJlbmRlcmVyKCl7dmFyIGE9d2luZG93LmlubmVySGVpZ2h0LGI9d2luZG93LmlubmVyV2lkdGgsYz1uZXcgX3RocmVlLldlYkdMUmVuZGVyZXIoe2FscGhhOiEwLGFudGlhbGlhczohMX0pO2Muc2V0U2l6ZShiLGEpLGMuc2hhZG93TWFwLmVuYWJsZWQ9ITA7dmFyIGQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dvcmxkJyk7cmV0dXJuIGQuYXBwZW5kQ2hpbGQoYy5kb21FbGVtZW50KSxjfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvY3JlYXRlUmVuZGVyZXIuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,'__esModule',{value:!0}),exports.default=createLights;var _three=__webpack_require__(0);function createLights(a){var b=new _three.HemisphereLight(11184810,0,.9),c=new _three.DirectionalLight(16777215,.9);c.position.set(150,200,700),c.castShadow=!0,c.shadow.camera.left=-400,c.shadow.camera.right=400,c.shadow.camera.top=400,c.shadow.camera.bottom=-400,c.shadow.camera.near=1,c.shadow.camera.far=1e3,c.shadow.mapSize.width=512,c.shadow.mapSize.height=512,a.add(b),a.add(c)}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2NyZWF0ZUxpZ2h0cy5qcz80MzI2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywnX19lc01vZHVsZScse3ZhbHVlOiEwfSksZXhwb3J0cy5kZWZhdWx0PWNyZWF0ZUxpZ2h0czt2YXIgX3RocmVlPXJlcXVpcmUoJ3RocmVlJyk7ZnVuY3Rpb24gY3JlYXRlTGlnaHRzKGEpe3ZhciBiPW5ldyBfdGhyZWUuSGVtaXNwaGVyZUxpZ2h0KDExMTg0ODEwLDAsLjkpLGM9bmV3IF90aHJlZS5EaXJlY3Rpb25hbExpZ2h0KDE2Nzc3MjE1LC45KTtjLnBvc2l0aW9uLnNldCgxNTAsMjAwLDcwMCksYy5jYXN0U2hhZG93PSEwLGMuc2hhZG93LmNhbWVyYS5sZWZ0PS00MDAsYy5zaGFkb3cuY2FtZXJhLnJpZ2h0PTQwMCxjLnNoYWRvdy5jYW1lcmEudG9wPTQwMCxjLnNoYWRvdy5jYW1lcmEuYm90dG9tPS00MDAsYy5zaGFkb3cuY2FtZXJhLm5lYXI9MSxjLnNoYWRvdy5jYW1lcmEuZmFyPTFlMyxjLnNoYWRvdy5tYXBTaXplLndpZHRoPTUxMixjLnNoYWRvdy5tYXBTaXplLmhlaWdodD01MTIsYS5hZGQoYiksYS5hZGQoYyl9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlcy9jcmVhdGVMaWdodHMuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,'__esModule',{value:!0});var _three=__webpack_require__(0),_Cube=__webpack_require__(2),_Cube2=_interopRequireDefault(_Cube),_colors=__webpack_require__(1);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}var BottomIsland=function a(){_classCallCheck(this,a),this.mesh=new _three.Object3D,this.mesh.add(new _Cube2.default([200,200,200],{x:0,y:-200,z:200},_colors.colors.darkGrey,'bottom-cube-basement').mesh)};exports.default=BottomIsland;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVPYmplY3RzL0JvdHRvbUlzbGFuZC9Cb3R0b21Jc2xhbmQuanM/MjRlMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsJ19fZXNNb2R1bGUnLHt2YWx1ZTohMH0pO3ZhciBfdGhyZWU9cmVxdWlyZSgndGhyZWUnKSxfQ3ViZT1yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL0N1YmUnKSxfQ3ViZTI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ3ViZSksX2NvbG9ycz1yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2NvbG9ycycpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoYSl7cmV0dXJuIGEmJmEuX19lc01vZHVsZT9hOntkZWZhdWx0OmF9fWZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhhLGIpe2lmKCEoYSBpbnN0YW5jZW9mIGIpKXRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpfXZhciBCb3R0b21Jc2xhbmQ9ZnVuY3Rpb24gYSgpe19jbGFzc0NhbGxDaGVjayh0aGlzLGEpLHRoaXMubWVzaD1uZXcgX3RocmVlLk9iamVjdDNELHRoaXMubWVzaC5hZGQobmV3IF9DdWJlMi5kZWZhdWx0KFsyMDAsMjAwLDIwMF0se3g6MCx5Oi0yMDAsejoyMDB9LF9jb2xvcnMuY29sb3JzLmRhcmtHcmV5LCdib3R0b20tY3ViZS1iYXNlbWVudCcpLm1lc2gpfTtleHBvcnRzLmRlZmF1bHQ9Qm90dG9tSXNsYW5kO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NjZW5lT2JqZWN0cy9Cb3R0b21Jc2xhbmQvQm90dG9tSXNsYW5kLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,'__esModule',{value:!0});var _three=__webpack_require__(0),_Cube=__webpack_require__(2),_Cube2=_interopRequireDefault(_Cube),_colors=__webpack_require__(1);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}var MiddleIsland=function a(){_classCallCheck(this,a),this.mesh=new _three.Object3D,this.mesh.add(new _Cube2.default([200,200,200],{x:0,y:0,z:0},_colors.colors.lightBrown,'middle-cube-basement').mesh)};exports.default=MiddleIsland;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVPYmplY3RzL01pZGRsZUlzbGFuZC9NaWRkbGVJc2xhbmQuanM/OGNkYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsJ19fZXNNb2R1bGUnLHt2YWx1ZTohMH0pO3ZhciBfdGhyZWU9cmVxdWlyZSgndGhyZWUnKSxfQ3ViZT1yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL0N1YmUnKSxfQ3ViZTI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ3ViZSksX2NvbG9ycz1yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2NvbG9ycycpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoYSl7cmV0dXJuIGEmJmEuX19lc01vZHVsZT9hOntkZWZhdWx0OmF9fWZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhhLGIpe2lmKCEoYSBpbnN0YW5jZW9mIGIpKXRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpfXZhciBNaWRkbGVJc2xhbmQ9ZnVuY3Rpb24gYSgpe19jbGFzc0NhbGxDaGVjayh0aGlzLGEpLHRoaXMubWVzaD1uZXcgX3RocmVlLk9iamVjdDNELHRoaXMubWVzaC5hZGQobmV3IF9DdWJlMi5kZWZhdWx0KFsyMDAsMjAwLDIwMF0se3g6MCx5OjAsejowfSxfY29sb3JzLmNvbG9ycy5saWdodEJyb3duLCdtaWRkbGUtY3ViZS1iYXNlbWVudCcpLm1lc2gpfTtleHBvcnRzLmRlZmF1bHQ9TWlkZGxlSXNsYW5kO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NjZW5lT2JqZWN0cy9NaWRkbGVJc2xhbmQvTWlkZGxlSXNsYW5kLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,'__esModule',{value:!0});var _three=__webpack_require__(0),_Cube=__webpack_require__(2),_Cube2=_interopRequireDefault(_Cube),_colors=__webpack_require__(1);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}var TopIsland=function a(){_classCallCheck(this,a),this.mesh=new _three.Object3D,this.mesh.add(new _Cube2.default([200,200,200],{x:-200,y:200,z:0},_colors.colors.lightGreen,'top-cube-basement').mesh)};exports.default=TopIsland;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVPYmplY3RzL1RvcElzbGFuZC9Ub3BJc2xhbmQuanM/YTU2NSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsJ19fZXNNb2R1bGUnLHt2YWx1ZTohMH0pO3ZhciBfdGhyZWU9cmVxdWlyZSgndGhyZWUnKSxfQ3ViZT1yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL0N1YmUnKSxfQ3ViZTI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ3ViZSksX2NvbG9ycz1yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2NvbG9ycycpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoYSl7cmV0dXJuIGEmJmEuX19lc01vZHVsZT9hOntkZWZhdWx0OmF9fWZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhhLGIpe2lmKCEoYSBpbnN0YW5jZW9mIGIpKXRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpfXZhciBUb3BJc2xhbmQ9ZnVuY3Rpb24gYSgpe19jbGFzc0NhbGxDaGVjayh0aGlzLGEpLHRoaXMubWVzaD1uZXcgX3RocmVlLk9iamVjdDNELHRoaXMubWVzaC5hZGQobmV3IF9DdWJlMi5kZWZhdWx0KFsyMDAsMjAwLDIwMF0se3g6LTIwMCx5OjIwMCx6OjB9LF9jb2xvcnMuY29sb3JzLmxpZ2h0R3JlZW4sJ3RvcC1jdWJlLWJhc2VtZW50JykubWVzaCl9O2V4cG9ydHMuZGVmYXVsdD1Ub3BJc2xhbmQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2NlbmVPYmplY3RzL1RvcElzbGFuZC9Ub3BJc2xhbmQuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///12\n");

/***/ })
/******/ ]);