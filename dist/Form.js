"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _excluded = ["fields", "onSubmit", "buttonTitle", "className", "style"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var Form = function Form(_ref) {
  var fields = _ref.fields,
    onSubmit = _ref.onSubmit,
    buttonTitle = _ref.buttonTitle,
    className = _ref.className,
    style = _ref.style,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useState = (0, _react.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    errors = _useState2[0],
    setErrors = _useState2[1];
  var _useState3 = (0, _react.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    formData = _useState4[0],
    setFormData = _useState4[1];
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var newErrors = {};
    var values = {};
    var form = e.currentTarget;
    fields.forEach(function (field) {
      var input = form.elements.namedItem(field.name);
      values[field.name] = input.value;
      if (field.name === 'confirmPassword' && formData['confirmPassword'] !== formData['password']) {
        newErrors[field.name] = "Passwords do not match";
      } else if (!values[field.name]) {
        newErrors[field.name] = "".concat(field.label, " is required");
      }
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      onSubmit(values);
    }
  };
  var handleChange = function handleChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    setFormData(_objectSpread(_objectSpread({}, formData), {}, _defineProperty({}, name, value)));
    if (!value && fields.find(function (field) {
      return field.name === name;
    })) {
      setErrors(_defineProperty({}, name, "".concat(name, " is required")));
    } else {
      setErrors(function (prevErrors) {
        var _ = prevErrors[name],
          rest = _objectWithoutProperties(prevErrors, [name].map(_toPropertyKey));
        return rest;
      });
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: "form-container ".concat(className || ''),
    style: style
  }, props), /*#__PURE__*/_react["default"].createElement("form", {
    className: "styled-form",
    onSubmit: handleSubmit
  }, fields.map(function (field) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: field.name,
      className: "form-group"
    }, /*#__PURE__*/_react["default"].createElement("label", {
      htmlFor: field.name
    }, field.label), /*#__PURE__*/_react["default"].createElement("input", {
      name: field.name,
      type: field.type || 'text',
      placeholder: field.placeholder,
      className: "form-control ".concat(errors[field.name] ? 'error' : ''),
      onChange: handleChange
    }), errors[field.name] && /*#__PURE__*/_react["default"].createElement("div", {
      className: "error-text"
    }, errors[field.name]));
  }), /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit",
    className: "submit-button"
  }, buttonTitle)), /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n                .form-container {\n                    max-width: 400px;\n                    margin: 20px auto;\n                    padding: 20px;\n                    background: #ffffff;\n                    border-radius: 10px;\n                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n                    transition: transform 0.3s ease-in-out;\n                }\n\n                .form-container:hover {\n                    transform: translateY(-2px);\n                }\n\n                .styled-form {\n                    display: flex;\n                    flex-direction: column;\n                    gap: 15px;\n                }\n\n                .form-group {\n                    display: flex;\n                    flex-direction: column;\n                }\n\n                label {\n                    font-size: 14px;\n                    font-weight: 600;\n                    margin-bottom: 5px;\n                    color: #333;\n                }\n\n                .form-control {\n                    padding: 10px;\n                    border-radius: 6px;\n                    border: 1px solid #ccc;\n                    font-size: 14px;\n                    transition: border 0.3s ease-in-out;\n                }\n\n                .form-control:focus {\n                    border-color: #007bff;\n                    outline: none;\n                    box-shadow: 0 0 5px rgba(0, 123, 255, 0.2);\n                }\n\n                .error {\n                    border-color: #dc3545;\n                }\n\n                .error-text {\n                    color: #dc3545;\n                    font-size: 12px;\n                    margin-top: 5px;\n                }\n\n                .submit-button {\n                    background: #007bff;\n                    color: white;\n                    padding: 10px;\n                    border: none;\n                    border-radius: 6px;\n                    font-size: 16px;\n                    cursor: pointer;\n                    transition: background 0.3s ease-in-out;\n                }\n\n                .submit-button:hover {\n                    background: #0056b3;\n                }\n            "));
};
var _default = exports["default"] = Form;