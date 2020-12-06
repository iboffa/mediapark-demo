import { NgModule } from '@angular/core';
import { PostEditorComponent } from './post-editor/post-editor.component';
import { EditorRoutingModule } from './editor-routing/editor-routing.module';
import {EditorModule as PrimengEditorModule} from 'primeng/editor';
import {InputTextModule} from 'primeng/inputtext';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {TooltipModule} from 'primeng/tooltip'
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PostEditorComponent],
  imports: [
    CommonModule,
    EditorRoutingModule,
    PrimengEditorModule,
    InputTextModule,
    PanelModule,
    ToolbarModule,
    ButtonModule,
    ReactiveFormsModule,
    TooltipModule
  ]
})
export class EditorModule { }
