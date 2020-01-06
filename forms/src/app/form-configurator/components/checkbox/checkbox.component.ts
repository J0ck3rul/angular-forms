import { Component, OnInit, forwardRef } from '@angular/core';
import { CustomControlValueAccessor } from 'src/app/shared/forms/CustomControlValueAccessor';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, FormGroup } from '@angular/forms';

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
export class CheckboxComponent extends CustomControlValueAccessor implements OnInit {

  public checkboxForm: FormGroup;

  constructor() {
    super();
   }

   ngOnInit(): void {
     this.checkboxForm = new FormGroup({});
   }
   public validate(_: FormControl): any {
    return this.checkboxForm.valid ? null : { form: { valid: false } };
  }

}
