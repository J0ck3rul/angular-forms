import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'form-configurator'
},
{
  path: 'form-configurator',
  loadChildren: () => import('./form-configurator/form-configurator.module').then(opt => opt.FormConfiguratorModule)
},
{
  path: 'display-form',
  loadChildren: () => import('./form-render/form-render.module').then(opt => opt.FormRenderModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
