import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'

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
        protected fb: FormBuilder
    ) {}

    ngOnInit(): void {
    }

    public onSubmit(): void {
        console.log('Submit')
    }

}
