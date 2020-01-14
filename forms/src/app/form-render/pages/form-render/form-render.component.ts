import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseFormGroup } from 'src/app/form-configurator/forms';
import { FormControl, FormArray, FormGroup, Validators } from '@angular/forms';
import { Types } from 'src/app/form-configurator/constants/controls-types.enum';
import { renderFormGroup as RenderFormGroup } from '../../forms/render.form';

@Component({
  selector: 'app-form-render',
  templateUrl: './form-render.component.html',
  styleUrls: ['./form-render.component.css']
})
export class FormRenderComponent implements OnInit {
  public types: any = Types;
  public form: RenderFormGroup;
  public formConfig: any;
  public controlTypes:  any[] = [];
  public titleValue: string;
  constructor(private http: HttpClient) {
    this.form = new RenderFormGroup();
  }

  get formItems(): FormArray {
    return this.form.controls.formItems as FormArray;
  }

  ngOnInit() {
    this.http.get('http://127.0.0.1:3000').subscribe((value: any) => {
      this.formConfig = value;
      this.titleValue = this.formConfig.title;
    
      this.formConfig.items.forEach(element => {

        this.controlTypes.push(element.controlType);

        this.formItems.push(new FormGroup({
          question: new FormControl(element.label),
          answer: new FormControl('', Validators.required)
        }));        
      });

      console.log(this.formConfig);

    });
  }

}
