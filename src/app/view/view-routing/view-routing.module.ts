import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostViewComponent } from '../post-view/post-view.component';

const routes: Routes =[{
  path:':id', component: PostViewComponent
}]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
