import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FlexLayoutModule } from '@angular/flex-layout'

import { MaterialModule } from './../material/material.module'
import { PostRoutingModule } from './post-routing.module'
import { PostListComponent } from './components/post-list/post-list.component';
import { PostFilterComponent } from './components/post-filter/post-filter.component'


@NgModule({
    declarations: [
        PostListComponent,
        PostFilterComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        PostRoutingModule,
        MaterialModule
    ],
    exports: [
        PostListComponent,
        PostFilterComponent
    ]
})
export class PostModule { }
