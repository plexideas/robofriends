export const ACTION_CHANGE_SEARCH_FIELD = 'CHANGE_SEARCH_FIELD';


export interface IActionChangeSearchField {
  type: 'CHANGE_SEARCH_FIELD',
  payload: {
    searchfield: string;
  }
};

export type SearchActions = IActionChangeSearchField;

export function actionSearch(text: string):IActionChangeSearchField {
  return {
    type: ACTION_CHANGE_SEARCH_FIELD,
    payload: {
      searchfield: text,
    }
  }
}
