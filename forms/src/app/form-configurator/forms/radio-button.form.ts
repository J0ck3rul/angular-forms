import { FormGroup, FormControl } from '@angular/forms';

export class RadioButtonFormGroup extends FormGroup {
  constructor(type: string) {
    super({
      controlType: new FormControl(type),
      label: new FormControl('')
    });
  }
}
