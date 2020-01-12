import { FormGroup, FormControl, FormArray } from '@angular/forms';

export class CheckboxFormGroup extends FormGroup {
  constructor() {
    super({
      label: new FormControl(),
      options: new FormArray([])
    });
  }
}
