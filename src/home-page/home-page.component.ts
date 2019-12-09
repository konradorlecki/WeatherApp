import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
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
    this.http.get(`${Api.link}/weather?q=${this.cityName}&APPID=${Api.key}&units=metric`)
      .subscribe(data => {
        data.main.temp = Math.round(data.main.temp) + '°C';
        this.cities.push(data);
        console.log(data);
      });

  }
}
