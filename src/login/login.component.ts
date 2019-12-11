import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FirebaseService} from '../services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../register/register.component.scss']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(public firebaseService: FirebaseService,
              private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.firebaseService.login(this.email, this.password)
      .then(work => {
        this.router.navigate(['/home']);
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('email', this.email);
      })
      .catch(err => console.log(err));
  }
}
