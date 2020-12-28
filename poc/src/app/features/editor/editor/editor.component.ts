import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from 'src/app/shared/models/item.model';
import { selectFinishedItems } from 'src/app/store';
import { deleteItem, selectItem, updateItem } from 'src/app/store/actions/item.actions';
import { ItemState } from 'src/app/store/reducers/items.reducer';

export enum viewMode {
  allItems = 'allItems',
  completedItems = 'completedItems',
}

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  items$: Observable<any>;
  completedItems$: Observable<any>;
  selectedItem: Item;
  viewModes = viewMode;
  itemsViewMode: string;

  constructor(private store: Store<ItemState>) {}

  ngOnInit(): void {
    this.onLoadItems();
  }

  onLoadItems(): void {
    this.items$ = this.store.pipe(
      select('items'),
      map((s: any) => {
        this.selectedItem = this.getSelectedItem(s);
        return s;
      })
    );

    this.completedItems$ = this.store.select(selectFinishedItems).pipe(
      map((s) => {
        console.log(s);
        return s;
      })
    );
  }

  onSelectItem(index): void {
    this.store.dispatch(selectItem({ selectedItem: index }));
  }

  onDeleteItem(item: Item): void {
    this.store.dispatch(deleteItem({ item }));
  }

  onUpdateItem(item: Item): void {
    this.store.dispatch(updateItem({ item }));
  }

  private getSelectedItem(state: any): Item {
    return state.items[state.selectedItem];
  }
}
