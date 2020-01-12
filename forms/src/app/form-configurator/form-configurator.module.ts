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
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { TextareaComponent } from './components/textarea/textarea.component';

const MATERIAL_MODULES: any[] = [
  MatButtonModule,
  MatInputModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatIconModule
];

@NgModule({
  declarations: [FormConfiguratorComponent, InputComponent,
    SelectComponent, CheckboxComponent, RadioButtonComponent,
    TextareaComponent],
  imports: [
    MATERIAL_MODULES,
    CommonModule,
    FormConfiguratorRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormConfiguratorModule { }
