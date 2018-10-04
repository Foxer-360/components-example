import AlertNotFound from "../lib/components/AlertNotFound";
import Dummy from "../lib/components/Dummy";

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
        return Dummy;

      default:
        return AlertNotFound;
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
    return AlertNotFound;
  };

  return ComponentsService;
}();

export { ComponentsService };