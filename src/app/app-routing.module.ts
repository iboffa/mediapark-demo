import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch:'full'},
  {path:'list', loadChildren:()=>import('./list/list.module').then(mod=> mod.ListModule)},
  {path:'view', loadChildren: ()=>import('./view/view.module').then(mod=> mod.ViewModule)},
  {path:'edit', loadChildren: ()=>import('./editor/editor.module').then(mod=> mod.EditorModule)},
  {path:'create', loadChildren: ()=>import('./create/create.module').then(mod=>mod.CreateModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
