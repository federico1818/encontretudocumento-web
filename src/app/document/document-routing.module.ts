import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { DocumentCreateComponent } from './pages/document-create/document-create.component'
import { DocumentFoundComponent } from './pages/document-found/document-found.component'

const routes: Routes = [
    {
        path: 'document/found',
        component: DocumentFoundComponent
    },
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
