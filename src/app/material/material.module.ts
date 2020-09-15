import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatIconModule } from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field' 
import { MatInputModule } from '@angular/material/input' 

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatExpansionModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatExpansionModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule
    ]
})

export class MaterialModule { }
