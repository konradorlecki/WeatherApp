import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Api} from '../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss']
})
export class CityDetailsComponent implements OnInit {
  cityName: string;
  cityData: object;
  isLoaded = false;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient) {
    this.cityName = route.snapshot.params.cityName;
    const params = new HttpParams()
      .set('q', this.cityName)
      .set('APPID', Api.key)
      .set('units', 'metric');

    this.http.get(`${Api.link}/weather?${params}`)
      .subscribe(data => {
          // @ts-ignore
          data.main.temp = Math.round(data.main.temp) + '°C';
          // @ts-ignore
          data.wind.deg = this.changeWindDirection(data.wind.deg);
          // @ts-ignore
          data.wind.speed = Math.round(data.wind.speed * 18 / 5);
          this.cityData = data;
          this.isLoaded = true;
        },
        error => alert(error.error.message)
      );
  }

  changeWindDirection(num) {
    const direction = Math.round(num / 22.5);
    const arr = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    return arr[direction % 16];
  }

  ngOnInit() {

  }

}
