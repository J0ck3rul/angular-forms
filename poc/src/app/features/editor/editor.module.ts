import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorRoutingModule } from './editor-routing.module';
import { EditorComponent } from './editor/editor.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { ItemEditComponent } from './components/item-edit/item-edit.component';
import {MatListModule} from '@angular/material/list';

const MATERIAL_MODULES: any[] = [
  MatListModule
]

@NgModule({
  declarations: [EditorComponent, ListViewComponent, ItemEditComponent],
  imports: [
    CommonModule,
    EditorRoutingModule,
    MATERIAL_MODULES,
  ]
})
export class EditorModule { }
