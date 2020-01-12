import { FormGroup, FormControl } from '@angular/forms';

export class TextareaFormGroup
  extends FormGroup {
  constructor(type: string) {
    super({
      controlType: new FormControl(type),
      label: new FormControl(),
      required: new FormControl()
    });
  }
}
