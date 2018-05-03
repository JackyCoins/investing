webpackHotUpdate(4,{

/***/ "./src/components/Investments/StocksPage/FormOfCreateStock/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd__ = __webpack_require__("./node_modules/antd/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_formik__ = __webpack_require__("./node_modules/formik/dist/formik.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_recompose__ = __webpack_require__("./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles__ = __webpack_require__("./src/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Common_ElementWrapper__ = __webpack_require__("./src/components/Common/ElementWrapper/index.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = "/Users/rusanov/WebstormProjects/investing/src/components/Investments/StocksPage/FormOfCreateStock/index.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Import libraries






// Import styles


// Import components


var FormItem = __WEBPACK_IMPORTED_MODULE_2_antd__["c" /* Form */].Item;
var Option = __WEBPACK_IMPORTED_MODULE_2_antd__["i" /* Select */].Option;

var selectImageResolution = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  __WEBPACK_IMPORTED_MODULE_2_antd__["i" /* Select */],
  { defaultValue: ".png", __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    Option,
    { value: ".png", __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    },
    ".png"
  ),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    Option,
    { value: ".jpg", __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    },
    ".jpg"
  )
);

var formItemStyle = {
  width: __WEBPACK_IMPORTED_MODULE_5__styles__["e" /* widthFormItemElementSize */] + "px"
};

var FormOfCreateStock = function FormOfCreateStock(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_6__Common_ElementWrapper__["a" /* default */],
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_antd__["c" /* Form */],
      { onSubmit: props.handleSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        FormItem,
        { required: true, style: formItemStyle, label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438", __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["e" /* Input */], { name: "title", value: props.values.title, onChange: props.handleChange, __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        FormItem,
        { style: formItemStyle, label: "\u041B\u043E\u0433\u043E\u0442\u0438\u043F", __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["e" /* Input */], { name: "logo", value: props.values.logo, onChange: props.handleChange, addonAfter: selectImageResolution, __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        FormItem,
        { style: formItemStyle, label: "\u0414\u043E\u0445\u043E\u0434\u043D\u043E\u0441\u0442\u044C \u0437\u0430 6 \u043C\u0435\u0441\u044F\u0446\u0435\u0432", __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["e" /* Input */], { type: "number", name: "lucrativenessPerSixMonths", value: props.values.lucrativenessPerSixMonths, onChange: props.handleChange, __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        FormItem,
        { style: formItemStyle, label: "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0437\u0430 \u0434\u0435\u043D\u044C", __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["e" /* Input */], { name: "earnings", type: "number", value: props.values.earnings, onChange: props.handleChange, __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        FormItem,
        { style: formItemStyle, required: true, label: "\u0426\u0435\u043D\u0430", __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["e" /* Input */], {
          name: "price",
          type: "number",
          value: props.values.price,
          onChange: props.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        FormItem,
        { required: true, label: "\u0412\u0430\u043B\u044E\u0442\u0430", style: formItemStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_antd__["i" /* Select */],
          { name: "currency", value: props.values.currency, onChange: function onChange(value) {
              props.onChange("stockIds", value);
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Option,
            { value: "RUB", __source: {
                fileName: _jsxFileName,
                lineNumber: 55
              }
            },
            "\u0420\u0443\u0431\u043B\u0435\u0439"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Option,
            { value: "USD", __source: {
                fileName: _jsxFileName,
                lineNumber: 56
              }
            },
            "\u0414\u043E\u043B\u043B\u0430\u0440\u043E\u0432"
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        FormItem,
        { style: formItemStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_antd__["b" /* Button */],
          { type: "primary", htmlType: "submit", __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            }
          },
          "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"
        )
      )
    )
  );
};

FormOfCreateStock.propTypes = {
  values: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
  handleSubmit: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  handleChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  onChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  createStockAction: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_4_recompose__["a" /* compose */])(Object(__WEBPACK_IMPORTED_MODULE_3_formik__["a" /* withFormik */])({
  mapPropsToValues: function mapPropsToValues(props) {
    return {
      title: "",
      logo: "",
      lucrativenessPerSixMonths: 0,
      earnings: 0,
      price: 0,
      currency: "RUB"
    };
  },
  validate: function validate(values) {},
  handleSubmit: function handleSubmit(values, _ref) {
    var props = _ref.props;

    var data = {
      title: values.title || "",
      logo: values.logo || "",
      lucrativenessPerSixMonths: +values.lucrativenessPerSixMonths || 0,
      earnings: +values.earnings || 0,
      price: {
        value: +values.price || 0,
        currency: values.currency || "RUB"
      }
    };

    props.createStockAction(data);
  }
}), Object(__WEBPACK_IMPORTED_MODULE_4_recompose__["c" /* withHandlers */])({
  onChange: function onChange(props) {
    return function (name, value) {
      props.setValues(_extends({}, props.values, _defineProperty({}, name, value)));
    };
  }
}))(FormOfCreateStock);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FormItem, "FormItem", "/Users/rusanov/WebstormProjects/investing/src/components/Investments/StocksPage/FormOfCreateStock/index.js");
  reactHotLoader.register(Option, "Option", "/Users/rusanov/WebstormProjects/investing/src/components/Investments/StocksPage/FormOfCreateStock/index.js");
  reactHotLoader.register(selectImageResolution, "selectImageResolution", "/Users/rusanov/WebstormProjects/investing/src/components/Investments/StocksPage/FormOfCreateStock/index.js");
  reactHotLoader.register(formItemStyle, "formItemStyle", "/Users/rusanov/WebstormProjects/investing/src/components/Investments/StocksPage/FormOfCreateStock/index.js");
  reactHotLoader.register(FormOfCreateStock, "FormOfCreateStock", "/Users/rusanov/WebstormProjects/investing/src/components/Investments/StocksPage/FormOfCreateStock/index.js");
  reactHotLoader.register(_default, "default", "/Users/rusanov/WebstormProjects/investing/src/components/Investments/StocksPage/FormOfCreateStock/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.432820a1aeaf68e22296.hot-update.js.map