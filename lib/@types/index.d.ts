import * as React from 'react';
interface ILooseObject {
    [key: string]: any;
}
declare class ComponentsService {
    getAllowedTypes(): string[];
    getComponent(type: string): typeof React.Component;
    getComponentResource(type: string): ILooseObject;
    getForm(type: string): typeof React.Component;
}
export { ComponentsService, };
