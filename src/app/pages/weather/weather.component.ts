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
    this.weatherService
      .newCall(this.location)
      .subscribe((res: any) => (this.searchedLocations = res));
    console.log(this.searchedLocations);
  }
  ngOnInit(): void {}
}
