import AlertNotFound from '@source/components/AlertNotFound';
import Dummy from '@source/components/Dummy';
import * as React from 'react';

interface ILooseObject {
  [key: string]: any;
}

class ComponentsService {

  public getAllowedTypes(): string[] {
    return ['Base', 'Dummy'];
  }

  public getComponent(type: string): typeof React.Component {
    switch (type) {
      case 'Dummy':
        return Dummy;
      default:
        return AlertNotFound;
    }
  }

  public getComponentResource(type: string): ILooseObject {
    const res = {
      data: {},
      name: 'Base',
    };

    if (type === 'Dummy') {
      return {
        data: {},
        name: 'Dummy',
      }
    }

    return res;
  }

  public getForm(type: string): typeof React.Component {
    return AlertNotFound;
  }

}

export {
  ComponentsService,
};
