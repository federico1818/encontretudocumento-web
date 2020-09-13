import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { DocumentRoutingModule } from './document-routing.module'
import { DocumentCreateComponent } from './pages/document-create/document-create.component'


@NgModule({
    declarations: [
        DocumentCreateComponent
    ],
    imports: [
        CommonModule,
        DocumentRoutingModule
    ]
})

export class DocumentModule { }
