import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
    this.http.get(`//api.openweathermap.org/data/2.5/weather?q=poznan&APPID=9255e12d14f3883315c070a9d1899c07`)
      .subscribe(data => this.cities.push(data));

  }
}
