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
  public cityData: object;
  isLoaded = false;


  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
    this.cityName = route.snapshot.params.cityName;
    const params = new HttpParams()
      .set('q', this.cityName)
      .set('APPID', Api.key)
      .set('units', 'metric');

    // this.http.get('//tile.openweathermap.org/map/precipitation_new/1/51.59/27.47?appid=9255e12d14f3883315c070a9d1899c07')
    //   .subscribe(data => {
    //     console.log(data);
    //   });

    this.http.get<any>(`${Api.link}/weather`, {params})
      .subscribe(data => {
          data.main.temp = Math.round(data.main.temp) + '°C';
          data.wind.deg = this.changeWindDirection(data.wind.deg);
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
