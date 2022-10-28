import { Injectable } from '@angular/core';
import { Users } from '../Frontend-Models/users';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
/**
 * a service for authenticating users 
 */
@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  /**
   * a variable for storing the token obtained from "Authorize" method once a user is authenticated
   */
    private token: string;
    /**
     * boolean observable that will represents the authentication status of users
     */
    private authstatuslistener = new Subject<boolean>();
    /**
     * this method is used in the navbar component to show/hide the logout button based on the state of the observable.
     * 
     * and in the app component to set the DOM key "userAuthenticated" to ture or false basedon the state of the observable 
     * @returns the boolean observable of the authentication status
     */
    getAuthStatusListener() {
      return this.authstatuslistener.asObservable();
    }
    /**
     * this method is used in the intercepter, so that we can add an Autherization header to the JWT for all outgoing HTTP requests 
     */
    getToken() {
      return this.token;
    }
    /**
     * 
     * @param dialog dialog component for showing messages
     * @param http Angular HTTPClient services
     * @param route Angular router 
     */
    constructor(public dialog: MatDialog, private http : HttpClient, private route: Router) { }
      /**
       * User model variable
       */
      user: Users;
    
  
      /**
       * Case : login Button is clicked, below function is invoked
       *  
      * posts the User data submitted through ngForm to the API, if the User credentials data matches one of the stored User credentials, it return a token, if not, it returns a message only 
      * @param name   user name submitted in a form
      * @param email user email submitted in a form
      * @param password user password submitted in a form
      */
      Authorize(name: string, email: string, password: string) {
        const user : Users = { Name: name, email: email, password: password} ;
        console.log(user.Name);
        this.http.post<{ authtoken: string ,message:string} > ('http://localhost:3000/api/login', user).subscribe(response => { console.log(response);
          /**
           * if a Token is returned as a response of the post HTTP request 
           * 
           * we set the boolean observable to true which represents the authentication status
           * 
           * we navigate to home page
           * 
           * save the Token in the local storage on the DOM
           */
          if (typeof response.authtoken == 'string') {
            this.token = response.authtoken;
            this.authstatuslistener.next(true);
            this.route.navigate(['/']);
            this.saveAuthData(this.token);
          }
            /**
             * if no Token is returned from the post HTTP request
             * 
             * we show a dialog message stating that user have to sign up
             */
            else if (typeof response.authtoken == 'undefined') {
              this.dialog.open(DialogComponent, {data: { name: "authenticate"}} );
            }
        });
      };
      /**
       * sets the token to null
       * 
       * sets boolean observable to false which represent the authentication status 
       * 
       * navigates to home page
       * 
       * clears the token from the local storage in the DOM 
       */
    logout() {
      this.token = null;
      this.authstatuslistener.next(false);
      this.route.navigate(['/']);
      this.clearAuthData();
    }
    /**
     * saves the token in the DOM
     * @param token response of the HTTP post request that resides inside the "Authorize" method as a result of successful authentication of users
     */
    private saveAuthData(token: string) {
      localStorage.setItem("token", token);
    }
    /**
     * removes the token from the DOM
     */
    private clearAuthData() {
      localStorage.removeItem("token");
    }
    /**
     * checks if token exists in the DOM
     * 
     * will be used in the Auth guard to activate/deactivate a route 
     */
    tokenExists() {
      return !!localStorage.getItem('token')
    }

  
}
