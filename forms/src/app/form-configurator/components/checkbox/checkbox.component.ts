import { Component, OnInit, forwardRef } from '@angular/core';
import { CustomControlValueAccessor } from 'src/app/shared/forms/CustomControlValueAccessor';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { CheckboxFormGroup } from '../../forms/checkbox.form';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => CheckboxComponent)
  },
  {
    provide: NG_VALIDATORS,
    multi: true,
    useExisting: forwardRef(() => CheckboxComponent)
  }]
})
export class CheckboxComponent extends CustomControlValueAccessor {

  public checkboxForm: CheckboxFormGroup;

  constructor() {
    super();

    this.checkboxForm = new CheckboxFormGroup();
  }

  public get options(): FormArray {
    return this.checkboxForm.controls.options as FormArray;
  }

  public validate(_: FormControl): any {
    return this.checkboxForm.valid ? null : { form: { valid: false } };
  }

  public addOption() {
    this.options.push(new FormControl(''));
  }
  public deleteOption(index: number) {
    this.options.removeAt(index);
  }
}
