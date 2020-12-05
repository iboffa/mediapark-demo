import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostEditorComponent } from 'src/app/editor/post-editor/post-editor.component';


const routes: Routes=[
  {path:'', component: PostEditorComponent}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CreateRoutingModule { }
