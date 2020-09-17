import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'

@Component({
    selector: 'app-document-create',
    templateUrl: './document-create.component.html',
    styleUrls: ['./document-create.component.scss']
})
export class DocumentCreateComponent implements OnInit {
    public documentTypeForm = this.fb.group({
        number: ['', [Validators.required]],
        name: ['', [Validators.required]]
    })

    constructor(
        protected fb: FormBuilder
    ) {}

    ngOnInit(): void {
    }

}
