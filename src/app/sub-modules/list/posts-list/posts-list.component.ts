import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TreeNode } from 'primeng/api';
import { Post } from 'src/app/models/post';
import { StoreService } from 'src/app/store/store.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {


  postTree: TreeNode<Post>[] = [];

  constructor(private store: StoreService, private router: Router) { }

  ngOnInit(): void {
    this.store.getPosts().subscribe((posts) => this.postTree = this.buildTree(posts))
  }

  createNewPost() {
    this.router.navigate(['create']);
  }

  deletePost(id: string) {
    this.store.deletePost(id);
  }

  editPost(id: string) {
    this.router.navigate(['edit', id])
  }

  getMonthName(month: string) {
    const monthMap: { [key: string]: string } = {
      '1': 'January',
      '2': 'Februrary',
      '3': 'March',
      '4': 'April',
      '5': 'May',
      '6': 'June',
      '7': 'July',
      '8': 'August',
      '9': 'September',
      '10': 'October',
      '11': 'November',
      '12': 'December'
    }
    return monthMap[month];
  }

  private buildTree(posts: Post[]) {
    const tree: TreeNode<Post>[] = []
    //Tree building from Posts array
    posts.forEach((post) => {
      if (tree.some((el) => el.label === post.year?.toString())) {
        const yearNode = tree.filter((el) => el.label == post.year?.toString())[0];
        if (yearNode.children?.some((el) => el.label === post.month?.toString())) {
          const monthNode = yearNode.children.filter(el => el.label === post.month?.toString())[0];
          if (monthNode.children?.some((el) => el.label === post.date?.toString())) {
            const dateNode = monthNode.children.filter((el) => el.label === post.date?.toString())[0];
            dateNode.children?.push(this.addPostToTree(post));
          }
          else monthNode.children?.push(this.addDate(post));
        }
        else yearNode.children?.push(this.addMonth(post));
      }
      else tree.push(this.addYear(post))
    })
    //Sorting the tree
    const comparator = (a: TreeNode<Post>, b: TreeNode<Post>) => parseInt(a.label!) - parseInt(b.label!)
    tree.sort(comparator);
    tree.forEach(year => {
      year.children?.sort(comparator);
      year.children?.forEach((month) => month.children?.sort(comparator));
    });
    return tree;
  }

  viewPost(id:string){
    this.router.navigate(['view', id])
  }

  private addPostToTree(post: Post): TreeNode<Post> {
    return {
      data: post,
      type: 'post'
    }
  }

  private addDate(post: Post): TreeNode<Post> {
    const label = post.date?.toString()
    return { label, children: [this.addPostToTree(post)] }
  }

  private addMonth(post: Post): TreeNode<Post> {
    const label = post.month?.toString()
    return { label, children: [this.addDate(post)], type: 'month' }
  }

  private addYear(post: Post): TreeNode<Post> {
    const label = post.year?.toString()
    return { label, children: [this.addMonth(post)] }
  }
}



