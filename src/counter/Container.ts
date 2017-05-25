import Counter from './Counter';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {CounterState, CounterActions, ActionDispatcher} from './module';

export default connect(
  (state: CounterState) => ({value: state}),
  (dispatch: Dispatch<CounterActions>) => ({actions: new ActionDispatcher(dispatch)})
)(Counter);