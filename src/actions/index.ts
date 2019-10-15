import RobotModel from '../models/Robot';

export const ACTION_ROBO_FETCH = 'ROBO_FETCH';
export const ACTION_ROBO_FETCH_SUCCESS = 'ROBO_FETCH_SUCCESS';
export const ACTION_ROBO_FETCH_ERROR = 'ROBO_FETCH_ERROR';

export interface IActionRobotFetch {
  type: 'ROBO_FETCH',
};

export interface IActionRobotFetchSuccess {
  type: 'ROBO_FETCH_SUCCESS',
  robots: RobotModel[],
};

export interface IActionRobotFetchError {
  type: 'ROBO_FETCH_ERROR',
  errorMessage: string,
};

export type AppActions = IActionRobotFetch | IActionRobotFetchSuccess | IActionRobotFetchError;

export function actionFetchRobot() {
  return {
    type: ACTION_ROBO_FETCH
  }
}
