import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { DetailComponent } from './detail/detail.component';
import {RoboAssistantService} from "./service/roboAssistant.service";
import {RoboReviewsService} from "./service/roboReviews.service";
import { PageNotFoundComponent } from "./not-found.component";
import { AppFooterComponent } from "./app-footer.component";
import { AppHeaderComponent } from "./app-header.component";

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchComponent,
    DetailComponent,
    PageNotFoundComponent,
    AppFooterComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RoboAssistantService, RoboReviewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
