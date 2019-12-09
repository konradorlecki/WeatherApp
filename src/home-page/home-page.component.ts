import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Api} from '../environments/environment';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public cityName: string;
  public cities = [];


  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  searchCity() {
    const params = new HttpParams()
      .set('q', this.cityName)
      .set('APPID', Api.key)
      .set('units', 'metric');

    this.http.get(`${Api.link}/weather?${params}`)
      .subscribe(data => {
          // @ts-ignore
          data.main.temp = Math.round(data.main.temp) + '°C';
          this.cities.push(data);
        },
        error => alert(error.error.message)
      );
  }
}
