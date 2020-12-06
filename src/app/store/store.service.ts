import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { Post } from '../models/post';
import { last, map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class StoreService {


  private _posts: Post[] = []
  private posts:Subject<Post[]>;

  constructor() {
    this._posts = JSON.parse(localStorage.getItem("posts") || "[]");
    this.posts=new BehaviorSubject<Post[]>(this._posts);
  }


  getPosts() {
    return this.posts.asObservable();
  }

  savePost(post: Post) {
    if(post.id){
      this._posts.splice(this._posts.findIndex(p=>p.id===post.id),1,post);
    }
    else{
      post.id=uuidv4();
      const today= new Date();
      post.date=today.getDate();
      post.month=today.getMonth()+1;
      post.year=today.getFullYear();
      this._posts.push(post)
    }
    this.posts.next(this._posts);
    localStorage.setItem("posts", JSON.stringify(this._posts))
  }

  getPost(id: any): Post | undefined {
   return this._posts.filter(p=>p.id===id)[0];
  }

  deletePost(id: any){
    this._posts.splice(this._posts.findIndex(p=>p.id===id),1);
    this.posts.next(this._posts);
    localStorage.setItem("posts", JSON.stringify(this._posts));
  }


}
