import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, FormGroup } from '@angular/forms';
import { CustomControlValueAccessor } from 'src/app/shared/forms/CustomControlValueAccessor';
import { RadioButtonFormGroup } from '../../forms/radio-button.form';
import { Types } from '../../constants/controls-types.enum';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => RadioButtonComponent)
  },
  {
    provide: NG_VALIDATORS,
    multi: true,
    useExisting: forwardRef(() => RadioButtonComponent)
  }]
})
export class RadioButtonComponent extends CustomControlValueAccessor implements OnInit {

  public radioButtonForm: RadioButtonFormGroup;

  constructor() {
    super();

    this.radioButtonForm = new RadioButtonFormGroup(Types.radioButton);

    this.radioButtonForm.valueChanges.subscribe(value => {
      this.onChange(value);
      this.onTouched();
    });

  }
  get label(): any {
    return this.radioButtonForm.controls.label;
  }

  ngOnInit() {
  }

  public validate(_: FormControl): any {
    return this.radioButtonForm.valid ? null : { form: { valid: false } };
  }
}
