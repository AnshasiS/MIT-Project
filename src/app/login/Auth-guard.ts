import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthorizationService } from '../services/authorization.service';
/**
 * A guard to protect certain routes from unauthorized users
 */
@Injectable()
export class authorizationGuard implements CanActivate {
    /**
     * Constructor
     * @param authService A service for authenticating users
     * @param route Angular Router service
    */
    constructor( private authService: AuthorizationService, private route: Router) {}
    /**
     * calls the "tokenExists" method within the authorization service which checks if a token is available in the local storage of the DOM
     * 
     * if a token exists the route guard is lifted, and route to desired component is activated
     * 
     * if there is no Token, route is detoured to login page
     * @returns can/can't activate the route 
    */
    canActivate() : boolean { 
        if (this.authService.tokenExists()) {
            return true;
        } 
        else {
        this.route.navigate(['./login']);
        return false;
        }
    }
}
    
    
       
    
         
        
   
       
       
            

