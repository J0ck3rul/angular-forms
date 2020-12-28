import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BaseComponent } from './components';


const COMPONENTS: any[] = [
  BaseComponent
]

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
