import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FirebaseService} from '../services/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public email: string;
  public password: string;
  public password2: string;

  constructor(public firebaseService: FirebaseService,
              private router: Router) {
  }

  ngOnInit() {
  }

  register() {
    if (this.password === this.password2) {
      this.firebaseService.register(this.email, this.password).then(
        done => {
          console.log(done);
          this.router.navigate(['/home']);
        }
      ).catch(err => alert(err));
    } else {
      alert('Passwords must be identical');
    }
  }

}
