import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../services/authorization.service';
import { CredentialsPostService } from '../services/credentialspost.service';
import { NgForm } from "@angular/forms";

/**
 * a component which contains the login/Sign up form 
 */

  @Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    exportAs: 'ngForm'
  })

  export class LoginComponent implements OnInit {
      
      
      /**
       * A variable that is set when the login button is clicked
       */
      loginButtonSelected: boolean = false;
      /**
       * A variable that is set when the signup button is clicked
       */
      signupButtonSelected: boolean = false;
      
      /**
       * on clicking login Button, "loginButtonSelected" variable is set and " signupButtonSelected" variable is reset
      */
      selectButton() {
        this.loginButtonSelected = true;
        this.signupButtonSelected = false;
        console.log(this.loginButtonSelected);
        console.log(this.signupButtonSelected);
      }
      /**
       * on clicking signup Button, "loginButtonSelected" variable is reset and " signupButtonSelected" variable is set
      */
      selectButton2() {
        this.loginButtonSelected = false;
        this.signupButtonSelected = true;
        console.log(this.loginButtonSelected);
        console.log(this.signupButtonSelected);
      }
      /**
       * 
       * @param service A service for storing/posting User credentials on MongoDB
       * @param authService A service for authenticating users credentials
      */
      constructor( public service: CredentialsPostService, public authService: AuthorizationService) {}
      
      /**
       * empty ngOnInit
      */

      ngOnInit(): void {}
    

     

      /**
       * we have signup Button and login button in out HTML template with a type "submit"
       * 
       * if login button is clicked "Authorize" method of the authorization service is invoked which authenticate the user.
       * 
       * if signup button is clicked, "submitToServer" method is invoked within the Credential post service which stores the user credentials on MongoDB after ensuring that the user credentials are unique
       * @param form fetches the values of submited credentials from the form
      */

      onSubmit(form: NgForm) {
        if (this.signupButtonSelected == true) 
        this.service.submitToServer();
        else if (this.loginButtonSelected == true) {
          this.authService.Authorize(form.value.Name, form.value.email, form.value.password);
        } 
      }
        // extra functionality
      // fetchdata() {
      //   this.service.getFromServer();
      // }

      
        // extra functionality
      // deleteData(userid : string) {
      //   this.service.deleteFromServer(userid);
      //   console.log(this.service.Array[1].id);
          
      // }
        
  }
