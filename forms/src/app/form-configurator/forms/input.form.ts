import { FormGroup, FormControl } from '@angular/forms';

export class InputFormGroup extends FormGroup {
  constructor(type: string) {
    super({
      controlType: new FormControl(type),
      label: new FormControl(),
    });
  }
}
