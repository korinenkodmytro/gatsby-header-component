"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _WhiteLBLogo_H = _interopRequireDefault(require("../images/White-LB-Logo_H.png"));

var _logo_white = _interopRequireDefault(require("../images/logo_white.png"));

require("bootstrap/dist/css/bootstrap.min.css");

var _gatsby = require("gatsby");

var _reactBootstrap = require("react-bootstrap");

require("../styles/partials/Header.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//Scrolling changes bg color function
var Header = function Header() {
  (0, _react.useEffect)(function () {
    var header = document.querySelector("#header-main");
    window.addEventListener("scroll", function () {
      if (window.pageYOffset === 0) {
        header.classList.remove("sticky-activated");
      }

      if (window.pageYOffset > 10) {
        header.classList.add("sticky-activated");
      }
    });
  }, []);

  var openDropdownHandler = function openDropdownHandler(event) {
    var dropdown = document.querySelector(".dropdown-list");

    if (window.innerWidth < 600) {
      event.preventDefault();
      console.log(event.target);
      dropdown.classList.toggle("dropdown-list__open");
    }
  };

  return /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Navbar, {
    bg: "",
    expand: "lg",
    className: "header-main",
    id: "header-main",
    sticky: "top"
  }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Container, {
    fluid: true,
    className: "header-container"
  }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Navbar.Brand, {
    href: "#home"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _WhiteLBLogo_H["default"],
    alt: "LemonBrew Logo",
    width: "200",
    className: "compnay-logo-dark-bg"
  }), /*#__PURE__*/_react["default"].createElement("img", {
    src: _logo_white["default"],
    alt: "LemonBrew Logo",
    width: "200",
    className: "compnay-logo-white-bg"
  })), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Navbar.Toggle, {
    "aria-controls": "basic-navbar-nav",
    bg: "dark"
  }), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Navbar.Collapse, {
    id: "basic-navbar-nav"
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "nav-list"
  }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_gatsby.Link, {
    className: "nav-link",
    to: "/",
    activeClassName: "active"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Company"))), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_gatsby.Link, {
    activeClassName: "active",
    className: "nav-link ",
    to: "/real-estate"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Real Estate"))), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_gatsby.Link, {
    activeClassName: "active",
    className: "nav-link",
    to: "/landing"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Landing"))), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_gatsby.Link, {
    className: "nav-link",
    to: "/title-services",
    activeClassName: "active"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Title Services"))), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_gatsby.Link, {
    className: "nav-link",
    to: "/home-insurance",
    activeClassName: "active"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Home Insurance"))), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_gatsby.Link, {
    className: "nav-link",
    to: "/contact",
    activeClassName: "active"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Contact"))), /*#__PURE__*/_react["default"].createElement("li", {
    className: "dropdown"
  }, /*#__PURE__*/_react["default"].createElement(_gatsby.Link, {
    className: "nav-link",
    to: "",
    activeClassName: "active"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Dropdown", " ", /*#__PURE__*/_react["default"].createElement("span", {
    onClick: function onClick(event) {
      return openDropdownHandler(event);
    },
    className: "dropdown-arrow"
  }, "\u2BC6"))), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "dropdown-list"
  }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_gatsby.Link, {
    className: "nav-link",
    to: "/test1",
    activeClassName: "active"
  }, "Test")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_gatsby.Link, {
    className: "nav-link",
    to: "/test2",
    activeClassName: "active"
  }, "Test"))))), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form, {
    inline: true
  }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
    variant: "warning navButton"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "tel:8335366627"
  }, "833-536-6627"))))));
};

var _default = Header;
exports["default"] = _default;

//# sourceMappingURL=Header.js.map