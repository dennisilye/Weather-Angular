import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, pipe } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}
  LOCATION_KEY: string = 'locations';
  
  getLocationKey(location: string) {
    const url =
      'http://dataservice.accuweather.com/locations/v1/cities/autocomplete';
    let queryParams = new HttpParams()
      .append('apikey', 'Hh3yrpXEWODKSKE0AqfHdhtAzGZrwKaf ')
      .append('q', location);
    return this.http.get<any>(url, { params: queryParams });
  }

  async getWeatherAtLocation(location: string) {
    let forcast = this.query();
    if (forcast) return forcast;
    console.log('dasd');
    
    let key: any = [];
    let queryParams = new HttpParams().append(
      'apikey',
      'Hh3yrpXEWODKSKE0AqfHdhtAzGZrwKaf '
    );

    const locationKey = await this.getLocationKey(location).toPromise();
    forcast = await this.http
      .get<any>(
        `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey[0].Key}`,
        { params: queryParams }
      )
      .toPromise();
    this._save(this.LOCATION_KEY, forcast);

    return forcast;
  }
  _save(entityType: string, entities: any) {
    localStorage.setItem(entityType, JSON.stringify(entities));
  }
  query() {
    var entities =
      JSON.parse(localStorage.getItem(this.LOCATION_KEY) || 'null') || null;
    if (!entities || !entities.length) {
      return entities;
    }
    return entities;
  }
}
