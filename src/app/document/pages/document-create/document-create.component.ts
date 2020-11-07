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
    public sending: boolean

    public documentTypeForm = this.fb.group({
        type_id: ['', [Validators.required]]
    })
    
    public documentForm = this.fb.group({
        number: ['', [Validators.required]],
        name: ['', [Validators.required]]
    })
    
    public documentImageForm = this.fb.group({
        
    })
    
    public documentContactForm = this.fb.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        extra: ['', []]
    })
    

    constructor(
        protected fb: FormBuilder,
        protected postService: PostService
    ) {}

    ngOnInit(): void {
    }

    public onSubmit(): void {
        this.sending = true
        let p = new Post
        p.number = '32444555'
        p.type = 'DNI'
        this.postService.save(p)
        setTimeout(() => {
            this.sending = false
        }, 2000)
    }

    public onGroupChange(event: MatButtonToggleChange): void {
        this.documentTypeForm.controls['type_id'].setValue(event.value)
    }

}
