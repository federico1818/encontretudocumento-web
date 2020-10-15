import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { Post } from 'src/app/core/post'
import { PostService } from 'src/app/post/services/post.service'

@Component({
    selector: 'app-document-request',
    templateUrl: './document-request.component.html',
    styleUrls: ['./document-request.component.scss']
})

export class DocumentRequestComponent implements OnInit {
    public post: Post

    constructor(
        protected route: ActivatedRoute,
        protected postService: PostService
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.post = this.postService.find(params['id'])
        })
    }
}