import { RouterModule , Routes } from '@angular/router';

//components
import { CasesComponent } from './../components/cases/cases.component';
import { MaintrackComponent } from './../components/maintrack/maintrack.component';

const app_routes: Routes = [
    { path: 'cases' , component: CasesComponent },
    { path: 'cases/:id' , component: MaintrackComponent },
    { path: '**', pathMatch: 'full' , redirectTo: 'cases' }
];

export const App_Routes = RouterModule.forRoot( app_routes );