import { Component, OnInit } from '@angular/core'
import { from, Observable } from 'rxjs'

import { PostService } from '../../services/post.service'

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {
    public posts: Observable<any[]>
    
    constructor(
        protected postService: PostService
    ) {}
    
    ngOnInit(): void {
        this.posts = this.postService.posts
        this.postService.all()
    }

}
