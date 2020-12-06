import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch:'full'},
  {path:'list', loadChildren:()=>import('./sub-modules/list/list.module').then(mod=> mod.ListModule)},
  {path:'view', loadChildren: ()=>import('./sub-modules/view/view.module').then(mod=> mod.ViewModule)},
  {path:'edit', loadChildren: ()=>import('./sub-modules/editor/editor.module').then(mod=> mod.EditorModule)},
  {path:'create', loadChildren: ()=>import('./sub-modules/create/create.module').then(mod=>mod.CreateModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
