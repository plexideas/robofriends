import { RobotListState, defaultRobotListState, robotListReducer } from './robotList';
import { Action } from 'redux';

export interface AppState {
  list: RobotListState,
}

export function defaultState() {
  return {
    list: defaultRobotListState()
  };
}

export function mainReducer(state: AppState = defaultState(), action: Action) {
  return {
    list: robotListReducer(state.list, action)
  };
}
