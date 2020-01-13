import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRenderRoutingModule } from './form-render-routing.module';
import { FormRenderComponent } from './pages/form-render/form-render.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

const MATERIAL_MODULES: any[] = [
  MatButtonModule,
  MatInputModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatIconModule,
  MatSelectModule
];

@NgModule({
  declarations: [FormRenderComponent],
  imports: [
    CommonModule,
    FormRenderRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MATERIAL_MODULES
  ]
})
export class FormRenderModule { }
