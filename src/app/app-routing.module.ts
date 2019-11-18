import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'business', loadChildren: './business/business.module#BusinessPageModule' },
  { path: 'entertainment', loadChildren: './entertainment/entertainment.module#EntertainmentPageModule' },
  { path: 'technology', loadChildren: './technology/technology.module#TechnologyPageModule' },
  { path: 'science', loadChildren: './science/science.module#SciencePageModule' },
  { path: 'sports', loadChildren: './sports/sports.module#SportsPageModule' },
  { path: 'health', loadChildren: './health/health.module#HealthPageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
