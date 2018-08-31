import * as React from 'react';
interface LooseObject {
    [key: string]: any;
}
declare class ComponentsService {
    getAllowedTypes(): string[];
    getComponent(type: string): typeof React.Component;
    getComponentResource(type: string): LooseObject;
    getForm(type: string): typeof React.Component;
}
export { ComponentsService, };
