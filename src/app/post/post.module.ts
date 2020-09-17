import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { MaterialModule } from './../material/material.module'
import { PostRoutingModule } from './post-routing.module'
import { PostListComponent } from './components/post-list/post-list.component'


@NgModule({
    declarations: [
        PostListComponent
    ],
    imports: [
        CommonModule,
        PostRoutingModule,
        MaterialModule
    ],
    exports: [
        PostListComponent
    ]
})
export class PostModule { }
