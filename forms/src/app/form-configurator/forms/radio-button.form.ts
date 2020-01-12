import { FormGroup, FormControl } from '@angular/forms';

export class RadioButtonFormGroup extends FormGroup {
  constructor() {
    super({
      label: new FormControl('')
    });
  }
}
