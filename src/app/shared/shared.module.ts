import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout'

import { MaterialModule } from './../material/material.module'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ]
})

export class SharedModule { }