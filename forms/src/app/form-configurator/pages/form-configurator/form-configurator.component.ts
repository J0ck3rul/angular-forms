import { Component, OnInit } from '@angular/core';
import { BaseFormGroup } from '../../forms/base.form';
import { FormArray, FormControl } from '@angular/forms';
import { Types } from '../../constants/controls-types.enum';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-configurator',
  templateUrl: './form-configurator.component.html',
  styleUrls: ['./form-configurator.component.css']
})
export class FormConfiguratorComponent {

  public configuratorForm: BaseFormGroup;
  public types = Types;
  public controlTypes: any[] = [];
  constructor(private http: HttpClient) {
    this.configuratorForm = new BaseFormGroup();
  }


  public submit(): void {
    console.log(this.configuratorForm.value);
    let jsonObj = JSON.parse(JSON.stringify(this.configuratorForm.value))
    console.log('  -->: jsonObj', jsonObj);

    this.http.post('http://127.0.0.1:3000', jsonObj).subscribe(value => console.log(value));
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

  public addRadioButton(): void {
    this.configuratorForm.addControl();
    this.controlTypes.push(Types.radioButton);
  }

  public addTextarea(): void {
    this.configuratorForm.addControl();
    this.controlTypes.push(Types.textarea);
  }
}
