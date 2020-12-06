import { NgModule } from '@angular/core';
import { ListRoutingModule } from './list-routing/list-routing.module';
import { PostsListComponent } from './posts-list/posts-list.component';
import {TreeModule} from 'primeng/tree';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button'
import {PanelModule} from 'primeng/panel'
import { CommonModule } from '@angular/common';
import {ScrollPanelModule} from 'primeng/scrollpanel';




@NgModule({
  declarations: [PostsListComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    TreeModule,
    ToolbarModule,
    ButtonModule,
    PanelModule,
    ScrollPanelModule
  ]
})
export class ListModule { }
