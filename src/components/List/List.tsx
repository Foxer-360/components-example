import * as React from 'react';

interface IProperties {
  data: {};
  list?: string[];
}

class List extends React.Component<IProperties, {}> {

  public render(): JSX.Element {
    const style = {
      background: 'limegreen',
      fontSize: '20px',
      padding: '12px 20px',
    } as React.CSSProperties;

    if (!this.isListValid()) {
      return (
        <div style={style}>
          <span>This is sample LIST component. But we have no data...</span>
        </div>
      );
    }

    const list = (this.props.list as string[]).map((item: string, index: number) => {
      return <li key={index}>{item}</li>
    });

    return (
      <div style={style}>
        <span>This is sample LIST component.</span><br />
        <ul>
          {list}
        </ul>
      </div>
    );
  }

  private isListValid(): boolean {
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
  }

};

export default List;
