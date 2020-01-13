import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseFormGroup } from 'src/app/form-configurator/forms';
import { FormControl, FormArray } from '@angular/forms';
import { Types } from 'src/app/form-configurator/constants/controls-types.enum';

@Component({
  selector: 'app-form-render',
  templateUrl: './form-render.component.html',
  styleUrls: ['./form-render.component.css']
})
export class FormRenderComponent implements OnInit {
  public types: any = Types;
  public form: BaseFormGroup;
  public formConfig: any;
  public titleValue: string;
  constructor(private http: HttpClient) {
    this.form = new BaseFormGroup();
  }

  get formItems(): FormArray {
    return this.form.controls.formItems as FormArray;
  }

  ngOnInit() {
    this.http.get('http://127.0.0.1:3000').subscribe((value: any) => {
      this.formConfig = value;
      this.titleValue = this.formConfig.title;


      console.log(this.formConfig);

    });
  }

}
