"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComponentsService = void 0;

var _AlertNotFound = _interopRequireDefault(require("./components/AlertNotFound"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComponentsService =
/** @class */
function () {
  function ComponentsService() {}

  ComponentsService.prototype.getAllowedTypes = function () {
    return ['Base'];
  };

  ComponentsService.prototype.getComponent = function (type) {
    switch (name) {
      default:
        return _AlertNotFound.default;
    }
  };

  ComponentsService.prototype.getComponentResource = function (type) {
    var res = {
      name: 'Base',
      data: {}
    };
    return res;
  };

  ComponentsService.prototype.getForm = function (type) {
    return _AlertNotFound.default;
  };

  return ComponentsService;
}();

exports.ComponentsService = ComponentsService;