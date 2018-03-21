'use strict';

import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import { say } from 'cowsay';
import faker from 'faker';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title:'cowsay app',
      content: null
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState( state => {
      return { content: say({ text: faker.lorem.paragraph()})}
    })  
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>click Me:</button>
        <pre>{this.state.content}</pre>
      </div>  
    );
  }
}

ReactDom.render(<App/>, document.getElementById('root'));