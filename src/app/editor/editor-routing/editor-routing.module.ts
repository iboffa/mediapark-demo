import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostEditorComponent } from '../post-editor/post-editor.component';

const routes: Routes=[
  {path:':id', component: PostEditorComponent}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EditorRoutingModule { }
