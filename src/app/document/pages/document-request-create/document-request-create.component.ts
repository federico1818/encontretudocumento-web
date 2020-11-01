import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { Post } from 'src/app/core/post'
import { PostService } from 'src/app/post/services/post.service'

@Component({
    selector: 'app-document-request-create',
    templateUrl: './document-request-create.component.html',
    styleUrls: ['./document-request-create.component.scss']
})

export class DocumentRequestCreateComponent implements OnInit {
    public post: Post
    
    public requestContactForm = this.fb.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        message: ['', []]
    })
    
    constructor(
        protected route: ActivatedRoute,
        protected fb: FormBuilder,
        protected postService: PostService
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.post = this.postService.find(params['id'])
        })
    }

    public onSubmit(): void {
        
    }

}
