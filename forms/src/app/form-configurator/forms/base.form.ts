import { FormGroup, FormControl, FormArray } from '@angular/forms';

export class BaseFormGroup extends FormGroup {
  constructor() {
    super({
      title: new FormControl('', []),
      items: new FormArray([]),
    });
  }
  get items(): FormArray {
    return this.controls.items as FormArray;
  }

  get title(): FormControl {
    return this.controls.title as FormControl;
  }
  set title(value) {

    this.title.setValue(value);
  }

  public addControl(): void {
    this.items.push(new FormControl());
  }
}
