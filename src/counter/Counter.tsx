import * as React from 'react';

export interface StateProps {
  num: number;
  loadingCount: number;
}

export interface DispatchProps {
    onIncrement: (num: number) => void;
    onDecrement: (num: number) => void;
    onIncrementAsync: (num: number) => void;
    onDecrementAsync: (num: number) => void;
}

export default class Counter extends React.Component<StateProps & DispatchProps, {}> {
  render() {
    return (
      <div>
        {(this.props.loadingCount === 0) ? null : <p>loading...</p>}
        <p>{`score: ${this.props.num}`}</p>
        <button onClick={() => this.props.onIncrement(3)}>Increment 3</button>
        <button onClick={() => this.props.onDecrement(2)}>Decrement 2</button>
        <button onClick={() => this.props.onIncrementAsync(3)}>Increment 3 Async</button>
        <button onClick={() => this.props.onDecrementAsync(2)}>Decrement 2 Async</button>
      </div>
    );
  }
}