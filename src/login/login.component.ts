import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FirebaseService} from '../services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  public data;

  constructor(public firebaseService: FirebaseService,
              private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    console.log('email', this.email, 'password', this.password);
    this.firebaseService.login(this.email, this.password)
      .then(work => {
        this.router.navigate(['/home']);
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('email', this.email);
      })
      .catch(err => console.log(err));
  }


  passEmail(data) {
    this.email = data;
    console.log(data);
  }

  passPassword(data) {
    this.password = data;
    console.log(data);
  }


}
