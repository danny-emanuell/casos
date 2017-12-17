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
import { ShowcasesComponent } from './components/showcases/showcases.component';
import { AddtrackComponent } from './components/track/addtrack/addtrack.component';
import { MaintrackComponent } from './components/maintrack/maintrack.component';
import { ShowtrackComponent } from './components/track/showtrack/showtrack.component';

import { LocalstorageService } from './services/localstorage/localstorage.service';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddcaseComponent,
    CasesComponent,
    ShowcasesComponent,
    AddtrackComponent,
    MaintrackComponent,
    ShowtrackComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    App_Routes
  ],
  providers: [ DatacasesService , LocalstorageService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
