var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

import * as React from 'react';

var List =
/** @class */
function (_super) {
  __extends(List, _super);

  function List() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  List.prototype.render = function () {
    var style = {
      background: 'limegreen',
      fontSize: '20px',
      padding: '12px 20px'
    };

    if (!this.isListValid()) {
      return React.createElement("div", {
        style: style
      }, React.createElement("span", null, "This is sample LIST component. But we have no data..."));
    }

    var list = this.props.list.map(function (item, index) {
      return React.createElement("li", {
        key: index
      }, item);
    });
    return React.createElement("div", {
      style: style
    }, React.createElement("span", null, "This is sample LIST component."), React.createElement("br", null), React.createElement("ul", null, list));
  };

  List.prototype.isListValid = function () {
    if (!this.props.list || this.props.list === undefined) {
      return false;
    }

    if (!this.props.list === null) {
      return false;
    }

    if (!Array.isArray(this.props.list)) {
      return false;
    }

    return true;
  };

  return List;
}(React.Component);

;
export default List;