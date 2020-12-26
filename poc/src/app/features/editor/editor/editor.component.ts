import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from 'src/app/shared/models/item.model';
import { deleteItem, selectItem } from 'src/app/store/actions/item.actions';
import { ItemState } from 'src/app/store/reducers/items.reducer';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  items$: Observable<any[]>;

  constructor(private store: Store<ItemState>) {}

  ngOnInit(): void {
    this.items$ = this.store.pipe(
      select('items'),
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
}
