import {Component, OnInit} from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public isLoggedIn;

  constructor(public firebaseService: FirebaseService, public router: Router) {
    this.isLoggedIn = sessionStorage.getItem('isLoggedIn');
  }

  ngOnInit() {
    this.isLoggedIn = sessionStorage.getItem('isLoggedIn');
  }

  signOut() {
    this.firebaseService.logout();
    sessionStorage.clear();
}
}
