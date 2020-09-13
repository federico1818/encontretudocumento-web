import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { DocumentCreateComponent } from './pages/document-create/document-create.component'

const routes: Routes = [
    {
        path: 'document/create',
        component: DocumentCreateComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DocumentRoutingModule { }
