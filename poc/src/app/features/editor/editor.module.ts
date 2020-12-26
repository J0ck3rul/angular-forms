import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import { ItemEditComponent } from './components/item-edit/item-edit.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { EditorRoutingModule } from './editor-routing.module';
import { EditorComponent } from './editor/editor.component';

const MATERIAL_MODULES: any[] = [MatListModule, MatButtonModule];

@NgModule({
  declarations: [EditorComponent, ListViewComponent, ItemEditComponent],
  imports: [CommonModule, EditorRoutingModule, MATERIAL_MODULES],
})
export class EditorModule {}
