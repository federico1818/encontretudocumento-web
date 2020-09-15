import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'

import { Post } from 'src/app/core/post'
import { PostService } from 'src/app/post/services/post.service'

@Component({
    selector: 'app-document-form',
    templateUrl: './document-form.component.html',
    styleUrls: ['./document-form.component.scss']
})
export class DocumentFormComponent implements OnInit {
    public form = this.fb.group({
        number: ['', [Validators.required]],
        name: ['', [Validators.required]]
    })
    
    constructor(
        protected fb: FormBuilder,
        protected postService: PostService
    ) {}

    ngOnInit(): void {
    }

    public onSubmit(): void {
        if(this.form.valid)
            this.send()
    }

    public send(): void {
        this.postService.save(new Post)
    }

}
