import React, { Component } from 'react';

export default class RecursiveComponent extends Component {
  state = {components: this.props.components};

  renderTree = (components = []) => {
    if (components.length === 0) {
      return;
    }

    const Component = components[0]
    components.shift();
    return (<Component>{this.renderTree(components)}</Component>)
  }

  render() {
    return (
      <div>
        {this.renderTree(this.state.components)}
      </div>
    );
  }
};
