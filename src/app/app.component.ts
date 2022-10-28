import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from './services/authorization.service';
import { SideNavigationService } from './services/sidenav.service';


/**
 * main component that incluse all sub components in it HTNL template
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-app';
  /**
    * side navigation icon click state
  */
  state : boolean= false;
 
  /**
    * variable for storing DOM element variable "userAuthenticated" which reflects the status of user Authentication
  */
  DomUserAuthenticated:string;  
  /**
    * a boolean that reflects the authentication state, to be used in HTML template to show/hide logout button
  */
  public userIsAuthenticated: boolean = false;
  
  /**
   * Constructor
   * @param service A service for sending clicks observables that is executed on side navigation icon
   * @param authService A service for authenticating users
   */
  constructor(private service : SideNavigationService, private authService: AuthorizationService) { }
  /**
   * we set/ reset "userIsAuthenticated" boolean variable based on the string value of the DOM key element "userAuthenticated" to hide/show log out button in our HTML template.
   * 
   * subscribe to the "side navigation icon" click observable recieved from the "sideNavigation Service", to control the opening and closing of the side nav container
  */
  ngOnInit() {  
    
    this.getStoredUserAuthenticationState();
    this.service.headerstate$.subscribe(message => { this.state= message});
    
    /**
     * we subscribe to a boolean observable which is recieved from the authorization service, the observable tells whether the user is authenticated or not.
    */
    this.authService.getAuthStatusListener().subscribe(isAuthenticated => { this.userIsAuthenticated= isAuthenticated;
      /**
       * sets the status of the DOM key "userAuthenticated" based on the returned subscribed value of the Authentication status observable "authstatuslistener" that resides in the Autherization service
       * 
       * converts the boolean observable to string since DOM key elements stores only string values
       */
      localStorage.setItem( "userAuthenticated", JSON.stringify(this.userIsAuthenticated));
    });
   
    
    
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
    * once logout button is pressed, logout method in the authorization service is invoked, which sets the token to null, routes to home page, removes the token from the local storage and sends a false boolean observable ( authentication status) through the authorization service 
  */
  onLogout() {
    this.authService.logout();
  }

  
}
  
  

