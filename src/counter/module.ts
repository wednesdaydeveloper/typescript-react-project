import {Action} from 'redux';
//import { createAction } from 'redux-actions';
//import { handleActions } from 'redux-actions';

export const INCREMENT_NAME = 'counter/increment';
type INCREMENT_TYPE = typeof INCREMENT_NAME;
export const DECREMENT_NAME = 'counter/decrement';
type DECREMENT_TYPE = typeof DECREMENT_NAME;

export interface IncrementAction extends Action {
  type: INCREMENT_TYPE;
  plusAmount: number;
}
export const incrementAmount = (amount: number): IncrementAction => ({
  type: INCREMENT_NAME,
  plusAmount: amount
});

export interface DecrementAction extends Action {
  type: DECREMENT_TYPE;
  minusAmount: number;
}

export const decrementAmount = (amount: number): DecrementAction => ({
  type: DECREMENT_NAME,
  minusAmount: amount
});

export interface CounterState {
  num: number;
};

export type CounterActions = IncrementAction | DecrementAction;

const initialState: CounterState = {num: 0};

export default function reducer(state: CounterState = initialState, action: CounterActions): CounterState {
  switch (action.type) {
    case INCREMENT_NAME:
      return {num: state.num + action.plusAmount};
    case DECREMENT_NAME:
      return {num: state.num - action.minusAmount};
    default:
      return state;
  }
}

export class ActionDispatcher {
  constructor(private dispatch: (action: CounterActions) => void) {}

  public increment(amount: number) {
    this.dispatch(incrementAmount(amount));
  }

  public decrement(amount: number) {
    this.dispatch(decrementAmount(amount));
  }
}