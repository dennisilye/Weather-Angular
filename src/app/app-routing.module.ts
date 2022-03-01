import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { WeatherComponent } from './pages/weather/weather.component';

const routes: Routes = [
  { path: '', component: WeatherComponent },
  { path: 'favorites', component: FavoritesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
