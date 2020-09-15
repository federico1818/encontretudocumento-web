import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { MaterialModule } from './../material/material.module'
import { DocumentRoutingModule } from './document-routing.module'
import { DocumentCreateComponent } from './pages/document-create/document-create.component'
import { DocumentFormComponent } from './components/document-form/document-form.component'


@NgModule({
    declarations: [
        DocumentCreateComponent,
        DocumentFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        DocumentRoutingModule
    ]
})

export class DocumentModule { }
