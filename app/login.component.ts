import { Component, OnInit } from '@angular/core';
// Import the Image interface
import {Image} from './image.interface';
// import { MoviesService } from './movies.service';

@Component({
  selector: 'ed-login',
  styleUrls: ['app/login.component.css'],
  templateUrl: 'app/login.component.html',
})
export class LoginComponent implements OnInit { 
  username = '';
  loggedIn = false;
  emailField: string = '';
  passwordField = '';

  ngOnInit() {
      if(firebase.auth().currentUser != null){
        this.emailField = firebase.auth().currentUser.email;
      }

      // firebase.auth().getRedirectResult().then(function(result) {
      //   if (result.credential) {
      //     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      //     var token = result.credential.accessToken;
      //     // [START_EXCLUDE]
      //     // document.getElementById('quickstart-oauthtoken').textContent = token;
      //   } else {
      //     // document.getElementById('quickstart-oauthtoken').textContent = 'null';
      //     // [END_EXCLUDE]
      //   }
      //   // The signed-in user info.
      //   var user = result.user;
      // }).catch(function(error) {
      //   // Handle Errors here.
      //   var errorCode = error.code;
      //   var errorMessage = error.message;
      //   // The email of the user's account used.
      //   var email = error.email;
      //   // The firebase.auth.AuthCredential type that was used.
      //   var credential = error.credential;
      //   // [START_EXCLUDE]
      //   if (errorCode === 'auth/account-exists-with-different-credential') {
      //     alert('You have already signed up with a different auth provider for that email.');
      //     // If you are using multiple auth providers on your app you should handle linking
      //     // the user's accounts here.
      //   } else {
      //     // console.error(error);
      //   }
      //   // [END_EXCLUDE]
      // });
      // [END getidptoken]

      // Listening for auth state changes.
      // [START authstatelistener]
      // firebase.auth().onAuthStateChanged(function(user) {
      //   if (user) {
      //     // User is signed in.
      //     var displayName = user.displayName;
      //     var email = user.email;
      //     var emailVerified = user.emailVerified;
      //     var photoURL = user.photoURL;
      //     var isAnonymous = user.isAnonymous;
      //     var uid = user.uid;
      //     var refreshToken = user.refreshToken;
      //     var providerData = user.providerData;
      //     // [START_EXCLUDE]
      //     document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
      //     document.getElementById('quickstart-sign-in').textContent = 'Log out';
      //     document.getElementById('quickstart-account-details').textContent = JSON.stringify({
      //       displayName: displayName,
      //       email: email,
      //       emailVerified: emailVerified,
      //       photoURL: photoURL,
      //       isAnonymous: isAnonymous,
      //       uid: uid,
      //       refreshToken: refreshToken,
      //       providerData: providerData
      //     }, null, '  ');
      //     // [END_EXCLUDE]
      //   } else {
      //     // User is signed out.
      //     // [START_EXCLUDE]
      //     document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
      //     document.getElementById('quickstart-sign-in').textContent = 'Log in with Facebook';
      //     document.getElementById('quickstart-account-details').textContent = 'null';
      //     document.getElementById('quickstart-oauthtoken').textContent = 'null';
      //     // [END_EXCLUDE]
      //   }
      //   // [START_EXCLUDE]
      //   document.getElementById('quickstart-sign-in').disabled = false;
      //   // [END_EXCLUDE]
      // });
    }

  onKeyEmail(email) {
    this.emailField = email;
  }

  onKeyPassword(password) {
    this.passwordField = password;
  }


  createAccount() {
    var email = this.emailField;
    var password = this.passwordField;
    alert('creating account for '+ email + ' and '+ password);

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      alert('error will robinson!')
      // Handle Errors here.
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // ...
    });
    this.emailField = '';
    this.passwordField = '';
  }

  emailLogin() {
    var email = this.emailField;
    var password = this.passwordField;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // ...
    });
  }

  toggleSignIn() {
    console.log('in toggleSignIn')
    if (!firebase.auth().currentUser) {
      // [START createprovider]
      var provider = new firebase.auth.FacebookAuthProvider();
      // [END createprovider]
      // [START addscopes]
      provider.addScope('user_likes');
      // [END addscopes]
      // [START signin]
      firebase.auth().signInWithPopup(provider);
      alert('signed in');
      // [END signin]
    } else {
      // [START signout]
      alert('signing out');
      firebase.auth().signOut();
      // [END signout]
    }
    // [START_EXCLUDE]
    // document.getElementById('quickstart-sign-in').disabled = true;
    // [END_EXCLUDE]
  }

  facebookLogin() {
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_birthday');
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      // var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      alert(result.user);
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // The email of the user's account used.
      // var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      // var credential = error.credential;
      // ...
    });
  }

  whoUser() {
    var user = firebase.auth().currentUser;

    if (user) {
      // User is signed in.
      alert(JSON.stringify(user, null, 2));
    } else {
      alert('no one signed in')
      // No user is signed in.
    }
  }

  googleLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;

      // ...
    }).catch(function(error) {
      // Handle Errors here.
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // The email of the user's account used.
      // var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      // var credential = error.credential;
      // ...
    });
  }

  logout() {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      alert('signout successful');
      this.emailField = '';
      this.passwordField = '';
    }, function(error) {
      alert('did not sign out');
      // An error happened.
    });
  }

}