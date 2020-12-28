import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Item } from 'src/app/shared/models/item.model';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent implements OnInit {
  @Input()
  list: any;

  @Output()
  selectItem: EventEmitter<number> = new EventEmitter();

  @Output()
  deleteItem: EventEmitter<Item> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log(this.list);
  }


  trackItem(index: number, item: Item): number {
    return item.id;
  }

  onSelectItem(index: number): void {
    this.selectItem.emit(index);
  }

  onDeleteItem(item: Item): void {
    this.deleteItem.emit(item);
  }
}
