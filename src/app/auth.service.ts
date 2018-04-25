import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/toPromise';
import { take } from 'rxjs/operator/take';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';

class User {
  email: string;
  displayName: string;
  isAdmin: boolean;

  constructor(authData) {
    this.email    = authData.email;
    this.displayName = authData.displayName;
    this.isAdmin = false;
  }
}

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
  public loggedInUser;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private router: Router,
    private afs: AngularFirestore,
    private db: AngularFireDatabase
  ) {
    this.user = firebaseAuth.authState;

    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          this.updateUserDetails(user);
        } else {
          this.userDetails = null;
        }
      }
    );
  }

  signup(email, password) {
    const secondaryApp = firebase.initializeApp(environment.firebaseConfig, 'Secondary');
    secondaryApp.auth().createUserWithEmailAndPassword(
      email, password
    ).then((user) => {
      const userData = new User(user);
      const ref = this.db.object('users/' + user.uid);
      ref.valueChanges()
        .subscribe(user$ => {
          if (!user$) {
            ref.set(userData);
          }
      });
    });
  }

  signInWithFacebook() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    );
  }

  signInWithGoogle() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  signInRegular(email, password) {
    const credential = firebase.auth.EmailAuthProvider.credential( email, password );

    return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password).then((user) => {
      this.updateUserDetails(user);
    });
  }

  updateUserDetails(user) {
    const userData = new User(user);
    const ref = this.db.object('users/' + user.uid);
    ref.valueChanges()
      .subscribe(user$ => {
        if (!user$) {
          ref.set(userData);
        } else {
          userData.isAdmin = user$['isAdmin'];
          userData['uid'] = user.uid;
        }
    });
    this.loggedInUser = userData;
  }

  isLoggedIn() {
    if (this.userDetails == null ) {
        return false;
    } else {
      return true;
    }
  }

  logout() {
    this.firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/login']));
  }
}
