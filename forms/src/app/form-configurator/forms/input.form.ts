import { FormGroup, FormControl } from '@angular/forms';

export class InputForm extends FormGroup {
  constructor() {
    super({
      label: new FormControl(),
      placeholder: new FormControl(),
      required: new FormControl()
    });
  }
}
