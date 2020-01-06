import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormConfiguratorRoutingModule } from './form-configurator-routing.module';
import { FormConfiguratorComponent } from './pages/form-configurator/form-configurator.component';
import { InputComponent } from './components/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from './components/select/select.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

const MATERIAL_MODULES: any[] = [
  MatButtonModule,
  MatInputModule,
  MatSlideToggleModule
];

@NgModule({
  declarations: [FormConfiguratorComponent, InputComponent, SelectComponent, CheckboxComponent],
  imports: [
    MATERIAL_MODULES,
    CommonModule,
    FormConfiguratorRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormConfiguratorModule { }
