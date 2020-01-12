import { FormGroup, FormControl } from '@angular/forms';

export class InputFormGroup extends FormGroup {
  constructor() {
    super({
      label: new FormControl(),
      placeholder: new FormControl(),
      required: new FormControl()
    });
  }
}
