import RobotModel from '../models/Robot';
import { AppActions } from '../actions'
import {
  ACTION_ROBO_FETCH, 
  ACTION_ROBO_FETCH_SUCCESS, 
  ACTION_ROBO_FETCH_ERROR
} from '../actions';


export interface RobotListState {
  status: string,
  robots: RobotModel[],
  errorMessage?: string,
};

export function defaultRobotListState() {
  return {
    status: 'INIT',
    robots: [],
  };
}

export function robotListReducer(state: RobotListState, action: AppActions):RobotListState {
  switch(action.type) {
    case ACTION_ROBO_FETCH: 
      return {
        ...state,
        status: 'LOADING',
      };
    case ACTION_ROBO_FETCH_SUCCESS: 
      return {
        ...state,
        status: 'LOADED',
        robots: action.robots,
      };
    case ACTION_ROBO_FETCH_ERROR:
      return state;
    default:
      return state;
  }

  return state;
}
