import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { debounceTime } from 'rxjs/operators';
import { Item } from 'src/app/shared/models/item.model';

import { ItemFormGroup, ItemTypedForm } from '../list-view/forms/item.form-group';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss'],
})
export class ItemEditComponent implements OnInit {
  @Input() set item(value: Item) {
    this.selectedItem = value;
    if (value) {
      this.form.patchValue(value, { emitEvent: false });
    } else {
      this.form.reset({}, { emitEvent: false });
    }
  }

  @Output()
  updateItem: EventEmitter<Item> = new EventEmitter();

  selectedItem: Item;

  form: ItemTypedForm;

  constructor() {
    this.form = new ItemFormGroup() as any;
  }

  ngOnInit(): void {
    this.form.valueChanges.pipe(debounceTime(300)).subscribe((value) => {
      this.updateItem.emit(value);
    });
  }
}
