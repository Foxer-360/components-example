import * as React from 'react';
import AlertNotFound from '@source/components/AlertNotFound';

interface LooseObject {
  [key: string]: any;
}

class ComponentsService {

  public getAllowedTypes(): string[] {
    return ['Base'];
  }

  public getComponent(type: string): typeof React.Component {
    switch (name) {
      default:
        return AlertNotFound;
    }
  }

  public getComponentResource(type: string): LooseObject {
    const res = {
      name: 'Base',
      data: {},
    };

    return res;
  }

  public getForm(type: string): typeof React.Component {
    return AlertNotFound;
  }

}

export {
  ComponentsService,
};
