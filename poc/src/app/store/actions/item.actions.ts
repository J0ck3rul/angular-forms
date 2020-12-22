import { createAction, props } from '@ngrx/store';
import { Item } from '../../shared/models/item.model'

export const getAllItems = createAction('[Items] Get All');
export const getItem = createAction('[Items] Get Item');
export const createItem = createAction('[Items] Create Item', props<{ item: Item }>());
export const updateItem = createAction('[Items] Update Item', props<{item: Item}>());
export const selectItem = createAction('[Items] Select Item', props<{ selectedItem: number }>());
export const deleteItem = createAction('[Items] Delete Item', props<{item: Item}>() );