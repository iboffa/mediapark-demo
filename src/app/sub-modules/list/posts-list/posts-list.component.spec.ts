import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TreeNode } from 'primeng/api';
import { TreeModule } from 'primeng/tree';
import { Post } from 'src/app/models/post';
import { PostsListComponent } from './posts-list.component';

describe('PostsListComponent', () => {
  let component: PostsListComponent;
  let fixture: ComponentFixture<PostsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostsListComponent],
      imports: [TreeModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    let store: any = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };
    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);

  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a tree', () => {
    fixture = TestBed.createComponent(PostsListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p-tree')).toBeTruthy();
  })

  it('should read posts from localStorage', () => {
    let posts: TreeNode<Post> = {
      label: '2019',
      children: [{
        label: '1', children: [{
          label: '1', children: [{
            data: {
              id: '1',
              title: 'Lorem',
              content: 'Lorem ipsum sit amet'
            },
          }]
        }]
      }]
    }
    localStorage.setItem('posts', JSON.stringify(posts));
    fixture.whenStable().then(() => {

    })

  })

});
