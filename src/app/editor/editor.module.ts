import { NgModule } from '@angular/core';
import { PostEditorComponent } from './post-editor/post-editor.component';
import { EditorRoutingModule } from './editor-routing/editor-routing.module';



@NgModule({
  declarations: [PostEditorComponent],
  imports: [
    EditorRoutingModule
  ]
})
export class EditorModule { }
