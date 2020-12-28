import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromItems from './reducers/items.reducer';

export interface AppState {
  items: fromItems.ItemState;
}

export const reducers: ActionReducerMap<AppState> = {
  items: fromItems.reducer,
};

// here will come selectors
export const selectItems = createFeatureSelector<fromItems.ItemState>('items');

export const selectFinishedItems = createSelector(selectItems, (items) => {
  return {
    items: items.items.filter((item) => parseInt(item.completedPercentage) === 100),
    selectedItem: items.selectedItem,
  };
});
