import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FlexLayoutModule } from '@angular/flex-layout'

import { MaterialModule } from 'src/app/material/material.module'
import { SharedModule } from 'src/app/shared/shared.module'
import { DocumentRoutingModule } from './document-routing.module'
import { DocumentCreateComponent } from './pages/document-create/document-create.component'
import { DocumentFormComponent } from './components/document-form/document-form.component';
import { DocumentFoundComponent } from './pages/document-found/document-found.component'


@NgModule({
    declarations: [
        DocumentCreateComponent,
        DocumentFormComponent,
        DocumentFoundComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MaterialModule,
        SharedModule,
        DocumentRoutingModule
    ]
})

export class DocumentModule { }
