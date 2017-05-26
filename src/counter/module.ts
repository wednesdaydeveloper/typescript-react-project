import {Action} from 'redux';

const INCREMENT_NAME = 'counter/increment';
const DECREMENT_NAME = 'counter/decrement';

type INCREMENT_TYPE = typeof INCREMENT_NAME;
type DECREMENT_TYPE = typeof DECREMENT_NAME;

export interface IncrementAction extends Action {
  type: INCREMENT_TYPE;
  payload: number;
}
export const incrementAmount = (amount: number): IncrementAction => ({
  type: INCREMENT_NAME,
  payload: amount
});

export interface DecrementAction extends Action {
  type: DECREMENT_TYPE;
  payload: number;
}

export const decrementAmount = (amount: number): DecrementAction => ({
  type: DECREMENT_NAME,
  payload: amount
});

export interface CounterState {
  num: number;
};

export type CounterActions = IncrementAction | DecrementAction;

const initialState: CounterState = {num: 0};

import { handleActions } from 'redux-actions';

export default handleActions<CounterState, CounterActions>({
  INCREMENT_NAME: (state: CounterState, action: CounterActions) => {
    return { num: state.num + action.payload };
  },
  DECREMENT_NAME: (state: CounterState, action: CounterActions) => {
    return { num: state.num - action.payload };
  }
}, initialState);

export class ActionDispatcher {
  constructor(private dispatch: (action: CounterActions) => void) {}

  public increment(amount: number) {
    this.dispatch(incrementAmount(amount));
  }

  public decrement(amount: number) {
    this.dispatch(decrementAmount(amount));
  }
  public incrementAsync(amount: number) {
    setTimeout(() => {
      this.dispatch(incrementAmount(amount));
    }, 2000);
  }

  public decrementAsync(amount: number) {
    setTimeout(() => {
      this.dispatch(decrementAmount(amount));
    }, 2000);
  }
}