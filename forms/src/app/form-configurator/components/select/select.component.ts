import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormGroup, FormControl, FormArray } from '@angular/forms';
import { CustomControlValueAccessor } from 'src/app/shared/forms/CustomControlValueAccessor';
import { SelectGroup } from '../../forms/select.form';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => SelectComponent)
  },
  {
    provide: true,
    multi: true,
    useExisting: forwardRef(() => SelectComponent)
  }]
})

export class SelectComponent extends CustomControlValueAccessor implements OnInit {

  public selectGroup: SelectGroup;

  constructor() {
    super();

    this.selectGroup = new SelectGroup();
   }

  ngOnInit() {
  }

  get options(): FormArray {
    return this.selectGroup.controls.options as FormArray;
  }

  public validate(_: FormControl): any {
    return this.selectGroup.valid ? null : { form: { valid: false } };
  }

}
