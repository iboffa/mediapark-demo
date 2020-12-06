import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { StoreService } from 'src/app/store/store.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {
  id: string | null="";

  constructor(private route: ActivatedRoute, private router: Router, private store: StoreService) { }

  post: Post | undefined;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.id=params.get("id");
      this.post=this.store.getPost(params.get("id"));
    })
  }

  back(){
    this.router.navigate(['list'])
  }

  edit(){
    this.router.navigate(['edit',this.id])
  }

}
