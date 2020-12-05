import { NgModule } from '@angular/core';
import { PostViewComponent } from './post-view/post-view.component';
import { ViewRoutingModule } from './view-routing/view-routing.module';



@NgModule({
  declarations: [PostViewComponent],
  imports: [
    ViewRoutingModule
  ]
})
export class ViewModule { }
