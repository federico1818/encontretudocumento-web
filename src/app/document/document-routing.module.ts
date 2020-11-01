import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { DocumentCreateComponent } from './pages/document-create/document-create.component'
import { DocumentFoundComponent } from './pages/document-found/document-found.component'
import { DocumentRequestCreateComponent } from './pages/document-request-create/document-request-create.component'
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
    },
    {
        path: 'document/:id/request/create',
        component: DocumentRequestCreateComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DocumentRoutingModule { }
