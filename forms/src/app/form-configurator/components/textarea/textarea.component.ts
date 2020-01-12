import { Component, OnInit, forwardRef } from '@angular/core';
import { TextareaFormGroup } from '../../forms/textarea.form';
import { CustomControlValueAccessor } from 'src/app/shared/forms/CustomControlValueAccessor';
import { FormControl, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormGroup } from '@angular/forms';
import { Types } from '../../constants/controls-types.enum';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => TextareaComponent)
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => TextareaComponent)
    }
  ]
})
export class TextareaComponent extends CustomControlValueAccessor implements OnInit {
  public textareFormGroup: TextareaFormGroup;

  constructor() {
    super();

    this.textareFormGroup = new TextareaFormGroup(Types.textarea);
    this.textareFormGroup.valueChanges.subscribe(value => {
      this.onChange(value);
      this.onTouched();
    });
  }

  ngOnInit() {
  }

  public validate(_: FormControl): any {
    return true;
  }

}
