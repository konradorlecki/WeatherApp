import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore, private fireAuth: AngularFireAuth) {
  }

  register(email, password) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  login(email, password) {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.fireAuth.auth.signOut();
  }

  addCity(cities, email) {
    return this.db.collection('weatherApp').doc(email).set({
      cities: cities
    });
  }

  getCities(email) {
    return this.db.collection('weatherApp').doc(email).valueChanges();
  }
}
