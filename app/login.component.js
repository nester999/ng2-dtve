"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
// import { MoviesService } from './movies.service';
var LoginComponent = (function () {
    function LoginComponent() {
        this.username = '';
        this.loggedIn = false;
        this.emailField = '';
        this.passwordField = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (firebase.auth().currentUser != null) {
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
    };
    LoginComponent.prototype.onKeyEmail = function (email) {
        this.emailField = email;
    };
    LoginComponent.prototype.onKeyPassword = function (password) {
        this.passwordField = password;
    };
    LoginComponent.prototype.createAccount = function () {
        var email = this.emailField;
        var password = this.passwordField;
        alert('creating account for ' + email + ' and ' + password);
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            alert('error will robinson!');
            // Handle Errors here.
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // ...
        });
        this.emailField = '';
        this.passwordField = '';
    };
    LoginComponent.prototype.emailLogin = function () {
        var email = this.emailField;
        var password = this.passwordField;
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // ...
        });
    };
    LoginComponent.prototype.toggleSignIn = function () {
        console.log('in toggleSignIn');
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
        }
        else {
            // [START signout]
            alert('signing out');
            firebase.auth().signOut();
        }
        // [START_EXCLUDE]
        // document.getElementById('quickstart-sign-in').disabled = true;
        // [END_EXCLUDE]
    };
    LoginComponent.prototype.facebookLogin = function () {
        var provider = new firebase.auth.FacebookAuthProvider();
        provider.addScope('user_birthday');
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            // var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            alert(result.user);
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // The email of the user's account used.
            // var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            // var credential = error.credential;
            // ...
        });
    };
    LoginComponent.prototype.whoUser = function () {
        var user = firebase.auth().currentUser;
        if (user) {
            // User is signed in.
            alert(JSON.stringify(user, null, 2));
        }
        else {
            alert('no one signed in');
        }
    };
    LoginComponent.prototype.googleLogin = function () {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            // var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // The email of the user's account used.
            // var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            // var credential = error.credential;
            // ...
        });
    };
    LoginComponent.prototype.logout = function () {
        firebase.auth().signOut().then(function () {
            // Sign-out successful.
            alert('signout successful');
            this.emailField = '';
            this.passwordField = '';
        }, function (error) {
            alert('did not sign out');
            // An error happened.
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'ed-login',
            styleUrls: ['app/login.component.css'],
            templateUrl: 'app/login.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map