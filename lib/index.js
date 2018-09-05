"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComponentsService = void 0;

var _AlertNotFound = _interopRequireDefault(require("./components/AlertNotFound"));

var _Dummy = _interopRequireDefault(require("./components/Dummy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComponentsService =
/** @class */
function () {
  function ComponentsService() {}

  ComponentsService.prototype.getAllowedTypes = function () {
    return ['Base', 'Dummy'];
  };

  ComponentsService.prototype.getComponent = function (type) {
    switch (type) {
      case 'Dummy':
        return _Dummy.default;

      default:
        return _AlertNotFound.default;
    }
  };

  ComponentsService.prototype.getComponentResource = function (type) {
    var res = {
      data: {},
      name: 'Base'
    };

    if (type === 'Dummy') {
      return {
        data: {},
        name: 'Dummy'
      };
    }

    return res;
  };

  ComponentsService.prototype.getForm = function (type) {
    return _AlertNotFound.default;
  };

  return ComponentsService;
}();

exports.ComponentsService = ComponentsService;