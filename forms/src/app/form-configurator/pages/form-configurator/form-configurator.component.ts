import { Component, OnInit } from '@angular/core';
import { BaseForm } from '../../forms/base.form';
import { FormArray, FormControl } from '@angular/forms';
import { Types } from '../../constants/controls-types.enum';

@Component({
  selector: 'app-form-configurator',
  templateUrl: './form-configurator.component.html',
  styleUrls: ['./form-configurator.component.css']
})
export class FormConfiguratorComponent implements OnInit {

  public configuratorForm: BaseForm;
  public types = Types ;
  public controlTypes: any[] = [];
  constructor() {
    this.configuratorForm = new BaseForm();
  }

  ngOnInit() {
  }

  public submit(): void {
    console.log(this.configuratorForm.value);

  }
  get items(): FormArray {
    return this.configuratorForm.controls.items as FormArray;
  }

  public addInput(): void {
    this.configuratorForm.addControl();
    this.controlTypes.push(Types.input);
  }

  public addSelect(): void {
    this.configuratorForm.addControl();
    this.controlTypes.push(Types.select);
  }

  public addCheckbox(): void {
    this.configuratorForm.addControl();
    this.controlTypes.push(Types.checkbox);
  }
}
