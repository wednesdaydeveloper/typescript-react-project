import {Dispatch} from 'redux';
import {createAction, handleActions, Action} from 'redux-actions';

const INCREMENT_NAME: string = 'counter/increment';
const DECREMENT_NAME: string = 'counter/decrement';

export const increment = createAction<number, number>(INCREMENT_NAME, (num: number) => num);
export const decrement = createAction<number, number>(DECREMENT_NAME, (num: number) => num);

export type CounterDispatchType = (num: number) => void;

export function incrementAsync(num: number) {
  return (dispatch: Dispatch<CounterDispatchType>) => {
    setTimeout(
      () => {
        dispatch(increment(num));
      }, 
      2000);
  };
}

export function decrementAsync(num: number) {
  return (dispatch: Dispatch<CounterDispatchType>) => {
    setTimeout(
      () => {
        dispatch(decrement(num));
      }, 
      2000);
  };
}

export interface CounterState {
  num: number;
};

export default handleActions<CounterState, number>(
  {
    [INCREMENT_NAME]: (state: CounterState, action: Action<number>) => {
      return action.payload ? { num: state.num + action.payload } : state;
    },
    [DECREMENT_NAME]: (state: CounterState, action: Action<number>) => {
      return action.payload ? { num: state.num - action.payload } : state;
    }
  },
  {num: 0});
