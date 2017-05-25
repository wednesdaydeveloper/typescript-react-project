import * as React from 'react';
import {ActionDispatcher, CounterState} from './module';

interface Props {
  value: CounterState;
  actions: ActionDispatcher;
}

export default class Counter extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        <p>score: {this.props.value.num}</p>
        <button onClick={() => this.props.actions.increment(3)}>Increment 3</button>
        <button onClick={() => this.props.actions.decrement(2)}>Decrement 2</button>
      </div>
    );
  }
}