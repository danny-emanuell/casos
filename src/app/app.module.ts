import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

//Routes
import { App_Routes } from './services/app.routes';

//Services
import { DatacasesService } from './services/datacases/datacases.service';
import { AddcaseComponent } from './components/addcase/addcase/addcase.component';
import { CasesComponent } from './components/cases/cases.component';

@NgModule({
  declarations: [
    AppComponent,
    AddcaseComponent,
    CasesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    App_Routes
  ],
  providers: [ DatacasesService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
