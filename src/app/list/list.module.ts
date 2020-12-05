import { NgModule } from '@angular/core';
import { ListRoutingModule } from './list-routing/list-routing.module';
import { PostsListComponent } from './posts-list/posts-list.component';



@NgModule({
  declarations: [PostsListComponent],
  imports: [
    ListRoutingModule
  ]
})
export class ListModule { }
