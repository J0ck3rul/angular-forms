import { FormGroup, FormControl, FormArray } from '@angular/forms';

export class SelectFormGroup extends FormGroup {
  constructor() {
    super({
      label: new FormControl(''),
      options: new FormArray([new FormControl('')])
    });
  }
}
