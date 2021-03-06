import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { DetailComponent } from './detail/detail.component';
import { RoboAssistantService } from "./service/roboAssistant.service";
import { RoboReviewsService } from "./service/roboReviews.service";
import { PageNotFoundComponent } from "./not-found.component";

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];


 export const appRoutingProviders: any[] = [

 ];

 export const routing = RouterModule.forRoot(routes);