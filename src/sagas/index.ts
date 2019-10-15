import { call, put, takeEvery } from 'redux-saga/effects'
import { AppActions, ACTION_ROBO_FETCH_ERROR, ACTION_ROBO_FETCH, ACTION_ROBO_FETCH_SUCCESS } from '../actions';
import RobotModel from '../models/Robot';
import RobotService from '../services/RobotService';



function* fetchRobotList(action: AppActions) {
  try {
    const robots:RobotModel[] = yield call(RobotService.getAll);
    yield put({type: ACTION_ROBO_FETCH_SUCCESS, robots})
  } catch (e) {
    yield put({type: ACTION_ROBO_FETCH_ERROR, errorMessage: e.message});
  }
};

function* RobotSaga() {
  yield takeEvery(ACTION_ROBO_FETCH, fetchRobotList);
}

export default RobotSaga;
