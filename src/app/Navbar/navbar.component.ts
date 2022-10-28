import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SideNavigationService } from '../services/sidenav.service'
import { AuthorizationService } from '../services/authorization.service';

/**
 * a component for creating the navigation bar elements
 */

  @Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
  })
  export class NavbarComponent implements OnInit  {
        /**
         * side navigation icon click state
         */
        state : boolean = false;
        /**
         * variable for storing DOM element variable "userAuthenticated" which reflects the status of user Authentication
         */
        DomUserAuthenticated:string; 
        /**
         * Array of offered languages
         */
        languages = ['en', 'de'];
        /**
         * a boolean that reflects the authentication state, to be used in HTML template to show/hide logout button
         */
        public userIsAuthenticated: boolean = false;
      
    
      /**
       * 
       * @param service A service for sending clicks observables that is executed on side navigation icon
       * @param translate a service for translating to other language
       * @param authService a service for authenticating users
       */

    
        constructor( private service : SideNavigationService, public translate: TranslateService, private authService: AuthorizationService ) {}
        /**
         * on component initialization, we subscribe to a boolean observable which is recieved from the authorization servic", the observable tells whether the user is authenticated or not.
         * 
         * we set/ reset "userIsAuthenticated" boolean variable based on the string value of the DOM key element "userAuthenticated" to hide/show log out button in our HTML template
         */
        ngOnInit() {
         
          this.authService.getAuthStatusListener().subscribe(isAuthenticated => { this.userIsAuthenticated= isAuthenticated;});
          this.getStoredUserAuthenticationState();
        }
        /**
         * converting DOM element "userAuthenticated", which is of type string to a boolean variable "userIsAuthenticated"
         */
        getStoredUserAuthenticationState() {
          this.DomUserAuthenticated = localStorage.getItem("userAuthenticated");
          if(this.DomUserAuthenticated == "true")
            this.userIsAuthenticated = true;
          else this.userIsAuthenticated = false; 
        }
        
        /**
         * on each click on the side navigation icon, state variable is toggeled 
         * 
         * it sends the state variable as an observable using "sideNavigationService" to app-component to control the opened/closed property of <mat-sidenav> tag element 
         */
        openNavigationBar() {          
          if (this.state == false)
          this.state = true;
          else this.state = false;
          this.service.sendState(this.state);
          console.log(this.state);   
        }

        
        /**
         * set the language to be used in the translate service 
         * 
         * invokes translatioon service
         * @param lang a string variable that is selected from a list in the HTML form
         */
        useLanguage( lang : string) {
          this.translate.use(lang);
          console.log("clicked");
          console.log(lang);
        }

        /**
         * once logout button is pressed, logout method in the authorization service is invoked, which sets the token to null, routes to home page, removes the token from the local storage and sends a false boolean observable ( authentication status) through the authorization service 
         */

        onLogout() {
          this.authService.logout();
          console.log(this.authService.getAuthStatusListener());
        }

  }
