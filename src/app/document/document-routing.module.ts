import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { DocumentCreateComponent } from './pages/document-create/document-create.component'
import { DocumentFoundComponent } from './pages/document-found/document-found.component'
import { DocumentRequestComponent } from './pages/document-request/document-request.component'

const routes: Routes = [
    {
        path: 'document/found',
        component: DocumentFoundComponent
    },
    {
        path: 'document/create',
        component: DocumentCreateComponent
    },
    {
        path: 'document/:id/request',
        component: DocumentRequestComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DocumentRoutingModule { }
