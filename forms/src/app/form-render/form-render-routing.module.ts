import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormRenderComponent } from './pages/form-render/form-render.component';


const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: FormRenderComponent
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRenderRoutingModule { }
