import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormGroup, FormControl, FormArray, NG_VALIDATORS } from '@angular/forms';
import { CustomControlValueAccessor } from 'src/app/shared/forms/CustomControlValueAccessor';
import { SelectFormGroup } from '../../forms/select.form';
import { Types } from '../../constants/controls-types.enum';

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
    provide: NG_VALIDATORS,
    multi: true,
    useExisting: forwardRef(() => SelectComponent)
  }]
})

export class SelectComponent extends CustomControlValueAccessor implements OnInit {

  public selectGroup: SelectFormGroup;
  ngOnInit(): void {
  }

  constructor() {
    super();

    this.selectGroup = new SelectFormGroup(Types.select);

    this.selectGroup.valueChanges.subscribe(value => {
      this.onChange(value);
      this.onTouched();
    });
  }

  get options(): FormArray {
    return this.selectGroup.controls.options as FormArray;
  }

  public validate(_: FormControl): any {
    return true;
  }

  public delete(index: number): void {
    this.options.removeAt(index);
  }

  public add(): void {
    this.options.push(new FormControl(''));
  }

}
