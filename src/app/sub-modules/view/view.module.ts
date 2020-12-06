import { NgModule } from '@angular/core';
import { PostViewComponent } from './post-view/post-view.component';
import { ViewRoutingModule } from './view-routing/view-routing.module';
import {PanelModule} from 'primeng/panel'
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { ScrollPanelModule } from 'primeng/scrollpanel'


@NgModule({
  declarations: [PostViewComponent],
  imports: [
    CommonModule,
    ViewRoutingModule,
    PanelModule,
    ToolbarModule,
    ButtonModule,
    ScrollPanelModule
  ]
})
export class ViewModule { }
