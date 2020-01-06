import { FormGroup, FormControl, FormArray } from '@angular/forms';

export class BaseForm extends FormGroup {
  constructor() {
    super({
      title: new FormControl('', []),
      items: new FormArray([]),
    });
  }

  get items(): FormArray   {
    return this.controls.items as FormArray;
  }

  public addControl(): void {
    this.items.push(new FormControl());
  }
}
