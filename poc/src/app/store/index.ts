import { ActionReducerMap } from '@ngrx/store';

import * as fromItems from './reducers/items.reducer';

export interface AppState {
    items: fromItems.ItemState;
}

export const reducers: ActionReducerMap<AppState> = {
    items: fromItems.reducer
}

// here will come selectors
