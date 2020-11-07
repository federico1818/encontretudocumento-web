import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout'

import { MaterialModule } from './../material/material.module'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component';
import { InputFileComponent } from './input-file/input-file.component'
import { ProgressComponent } from './progress/progress.component'

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        InputFileComponent,
        ProgressComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        InputFileComponent,
        ProgressComponent
    ]
})

export class SharedModule { }
