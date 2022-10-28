import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../Frontend-Models/users';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
/**
 * a service for posting/storing users credentials to the server
 */
@Injectable({
  providedIn: 'root'
})
export class CredentialsPostService {
    
    /**
     * a Users model variable 
     */
    user = new Users("", "", "");
  
    /**
     * 
     * @param http Angular HTTPClient service
     * @param dialog Mat dialog component
     */
    constructor(private http : HttpClient, public dialog: MatDialog) { }
    /**
     * Case : sign up Button is clicked, below function is invoked.
     *  
     * the function posts the User credential data, submitted through HTML Form to the server and stores it in the data base if the user credentials are unique, in case a JSON object is returned from the post HTTP request, Dialog component with a message of "sign up is successfull" shows, otherwise Dialog component with a message of "sign up failed " shows up.
     * @returns JSON object or a message from the API 
     */
  submitToServer() {
    console.log(this.user.email);
    this.http.post< {message: string, result: any } > ('http://localhost:3000/api/userspost', this.user).subscribe(response => { console.log(response.result);
      if ( typeof response.result == 'object') {
        this.dialog.open(DialogComponent, {data: { name: "signup successful"}});
      }
      else if ( typeof response.result == 'undefined')
        this.dialog.open(DialogComponent, {data: { name: "signup failed"}});
        
    });

  }

}
