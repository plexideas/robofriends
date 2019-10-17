import { SearchActions, ACTION_CHANGE_SEARCH_FIELD } from '../actions/search-box-action';

export interface SearchBoxState {
  searchfield: string;
};

export function defaultSearchBoxState() {
  return {
    searchfield: '',
  };
};

export function searchListReducer(state: SearchBoxState = defaultSearchBoxState(), action: SearchActions):SearchBoxState {
  switch(action.type) {
    case ACTION_CHANGE_SEARCH_FIELD: {
      return {
        ...state,
        searchfield: action.payload.searchfield,
      }
    }
    default: 
      return state;
  };
}
