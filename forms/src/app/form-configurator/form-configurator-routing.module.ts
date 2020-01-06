import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormConfiguratorComponent } from './pages/form-configurator/form-configurator.component';


const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: FormConfiguratorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormConfiguratorRoutingModule { }
