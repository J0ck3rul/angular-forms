import { FormGroup, FormControl, FormArray } from '@angular/forms';

export class CheckboxFormGroup extends FormGroup {
  constructor(type: string) {
    super({
      controlType: new FormControl(type),
      label: new FormControl(),
      options: new FormArray([])
    });
  }
}
