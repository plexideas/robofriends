import { RobotListState, robotListReducer} from './robot-list-reducer';
import { SearchBoxState, searchListReducer } from './search-box-reducer';
import { combineReducers } from 'redux';

export interface AppState {
  list: RobotListState,
  filter: SearchBoxState,
}

const mainReducer = combineReducers({
  list:robotListReducer,
  filter:searchListReducer,
});

export default mainReducer;
