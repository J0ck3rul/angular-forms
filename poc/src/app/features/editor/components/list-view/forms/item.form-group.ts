import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

import { Item } from 'src/app/shared/models/item.model';

type ItemControls = {[key in keyof Item]: AbstractControl}

export type ItemTypedForm = Omit<FormGroup, 'value'|'controls'> & {
  value: Item, controls: ItemControls
}


export class ItemFormGroup extends FormGroup {
  constructor() {
    super({
      id: new FormControl(),
      name: new FormControl(),
      complexity: new FormControl(),
      details: new FormControl(),
      completedPercentage: new FormControl()
    })
  }
}
