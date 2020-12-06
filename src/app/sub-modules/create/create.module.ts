import { NgModule } from '@angular/core';
import { CreateRoutingModule } from './create-routing/create-routing.module';
import {EditorModule} from 'primeng/editor';
import {InputTextModule} from 'primeng/inputtext';
import {PanelModule} from 'primeng/panel';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CreateRoutingModule,
    EditorModule,
    InputTextModule,
    PanelModule
  ]
})
export class CreateModule { }
