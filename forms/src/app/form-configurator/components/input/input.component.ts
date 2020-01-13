import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { CustomControlValueAccessor } from 'src/app/shared/forms/CustomControlValueAccessor';
import { InputFormGroup } from '../../forms/input.form';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl } from '@angular/forms';
import { Types } from '../../constants/controls-types.enum';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputComponent)
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => InputComponent)
    }
  ]
})
export class InputComponent extends CustomControlValueAccessor implements OnInit {

  public inputForm: InputFormGroup;

  constructor() {
    super();
    this.inputForm = new InputFormGroup(Types.input);

    this.inputForm.valueChanges.subscribe(value => {
      this.onChange(value);
      this.onTouched();
    });
  }

  ngOnInit(): void {

  }

  public get label(): FormControl {
    return this.inputForm.controls.label as FormControl;
  }
  public validate(_: FormControl): any {
    return this.inputForm.valid ? null : { form: { valid: false } };
  }
}
