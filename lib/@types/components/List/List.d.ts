import * as React from 'react';
interface IProperties {
    data: {};
    list?: string[];
}
declare class List extends React.Component<IProperties, {}> {
    render(): JSX.Element;
    private isListValid;
}
export default List;
