import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { StoreService } from 'src/app/store/store.service';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.scss']
})
export class PostEditorComponent implements OnInit {
  submitButtonLabel: string | undefined;
  form= new FormGroup({
    title: new FormControl(null, [Validators.required, this.noWhiteSpacesOnly]),
    content: new FormControl(null, [Validators.required, this.noWhiteSpacesOnly])

  })
  id: string | null="";
  post: Post | undefined;

  constructor(private route: ActivatedRoute, private router:Router, private store:StoreService) { }



  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.id=params.get("id");
      this.post=this.store.getPost(params.get("id"));
      this.form.get("title")?.setValue(this.post?.title);
      this.form.get("content")?.setValue(this.post?.content)
    })
   
  }

  back(){
    this.router.navigate(['list'])
  }

  backView(){
    this.router.navigate(['view', this.id])
  }

  save(){
    this.store.savePost({...this.post,...this.form.value});
    this.router.navigate(['list']);
  }

  private noWhiteSpacesOnly(control: AbstractControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }



}
