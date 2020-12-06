import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ButtonModule } from 'primeng/button';

import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';
import { PostEditorComponent } from './post-editor.component';

describe('PostEditorComponent', () => {
  let component: PostEditorComponent;
  let fixture: ComponentFixture<PostEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostEditorComponent],
      imports: [InputTextModule, PanelModule, ButtonModule, ToolbarModule, RouterTestingModule, BrowserAnimationsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title input', () => {
    fixture = TestBed.createComponent(PostEditorComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#title')).toBeTruthy();
  })

  it('should render post editor', () => {
    fixture = TestBed.createComponent(PostEditorComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('textarea').length).toEqual(1);
  })

  it('should render toolbar', () => {
    fixture = TestBed.createComponent(PostEditorComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('p-button[label="Back"]').length).toEqual(1);
    expect(compiled.querySelector('p-button#submit')).toBeTruthy();
  })

});
