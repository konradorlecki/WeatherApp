import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Api} from '../environments/environment';
import {FirebaseService} from '../services/firebase.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public cityName: string;
  public cities = [];
  public isLoggedIn: boolean;
  public email: string;
  public isLoaded = false;

  constructor(private http: HttpClient, public firebaseService: FirebaseService) {
    // @ts-ignore
    this.isLoggedIn = sessionStorage.getItem('isLoggedIn');
  }

  ngOnInit() {
    this.email = sessionStorage.getItem('email');
    if (this.email) {
      this.firebaseService.getCities(this.email).subscribe(data => {
        if (this.isLoggedIn) {
          // @ts-ignore
          this.cities = data.cities;
          this.isLoaded = true;
        }
      });
    }
    this.isLoaded = true;
  }

  addCitiesToDatabase() {
    this.firebaseService.addCity(this.cities, this.email).then();
  }

  check(data) {
    for (let i = 0; i < this.cities.length; i++) {
      // @ts-ignore
      if (this.cities[i].name === data.name) {
        return false;
      }
    }
  }

  searchCity() {
    const params = new HttpParams()
      .set('q', this.cityName)
      .set('APPID', Api.key)
      .set('units', 'metric');
    this.http.get<any>(`${Api.link}/weather`, {params})
      .subscribe(data => {
          // @ts-ignore
          if (this.check(data) === undefined) {
            // @ts-ignore
            this.cities.push(data);
          }
          data.main.temp = Math.round(data.main.temp) + '°C';
          // @ts-ignore
          if (this.email) {
            this.addCitiesToDatabase();
          }
        },
        error => alert(error.error.message)
      );

  }

  deleteCity(index) {
    this.cities.splice(index, 1);
    this.addCitiesToDatabase();
  }

}

