import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FlexLayoutModule } from '@angular/flex-layout'

import { MaterialModule } from './material/material.module'
import { AppRoutingModule } from './app-routing.module'
import { SharedModule } from './shared/shared.module'
import { DocumentModule } from './document/document.module'
import { AppComponent } from './app.component'

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        MaterialModule,
        FlexLayoutModule,
        SharedModule,
        AppRoutingModule,
        DocumentModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
