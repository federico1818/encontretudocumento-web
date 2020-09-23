import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { MatButtonToggleChange } from '@angular/material/button-toggle'

import { Post } from 'src/app/core/post'
import { PostService } from 'src/app/post/services/post.service'

@Component({
    selector: 'app-document-create',
    templateUrl: './document-create.component.html',
    styleUrls: ['./document-create.component.scss']
})

export class DocumentCreateComponent implements OnInit {
    public documentTypeForm = this.fb.group({
        type_id: ['', [Validators.required]]
    })
    
    public documentForm = this.fb.group({
        number: ['', [Validators.required]],
        name: ['', [Validators.required]]
    })
    
    public documentContactForm = this.fb.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]]
    })

    constructor(
        protected fb: FormBuilder,
        protected postService: PostService
    ) {}

    ngOnInit(): void {
    }

    public onSubmit(): void {
        let p = new Post
        p.number = '32444555'
        p.type = 'DNI'
        this.postService.save(p)
    }

    public onGroupChange(event: MatButtonToggleChange): void {
        this.documentTypeForm.controls['type_id'].setValue(event.value)
    }

}
