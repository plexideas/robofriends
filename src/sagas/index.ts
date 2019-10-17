import { call, put, takeEvery } from 'redux-saga/effects'
import { RobotListActions, ACTION_ROBO_FETCH_ERROR, ACTION_ROBO_FETCH, ACTION_ROBO_FETCH_SUCCESS } from '../actions/robot-list-action';
import RobotModel from '../models/robot-model';
import RobotService from '../services/robot-service';



function* fetchRobotList(action: RobotListActions) {
  try {
    const robots:RobotModel[] = yield call(RobotService.getAll);
    yield put({type: ACTION_ROBO_FETCH_SUCCESS, payload: { robots } })
  } catch (e) {
    yield put({type: ACTION_ROBO_FETCH_ERROR, payload: { errorMessage: e.message }});
  }
};

function* RobotSaga() {
  yield takeEvery(ACTION_ROBO_FETCH, fetchRobotList);
}

export default RobotSaga;
