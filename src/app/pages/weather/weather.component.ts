import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}
  weatherdata: any[] = [];
  location: any = ' ';
  searchedLocations: any = [];

  onSearch(event: any) {
    event.preventDefault();
    console.log('clikced');
    this.searchedLocations = this.weatherService.getWeatherAtLocation(this.location);
    console.log(this.searchedLocations);
  }
  ngOnInit(): void {}
}
