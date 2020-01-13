import { FormGroup, FormArray } from '@angular/forms';

export class renderFormGroup extends FormGroup {
  constructor() {
    super({
      formItems: new FormArray([])
    });
  }
}
