import { FormGroup, FormControl, FormArray } from '@angular/forms';

export class SelectFormGroup extends FormGroup {
  constructor(type: string) {
    super({
      controlType: new FormControl(type),
      label: new FormControl(''),
      options: new FormArray([new FormControl('')])
    });
  }
}
