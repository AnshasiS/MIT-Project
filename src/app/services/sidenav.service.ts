import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
/**
 * a service for sending a click observable whenever the user clicks on the side nav icon in the Nav Bar component
 * 
 * Use case: so that I can control the opening and closing of the side nav container that exists in the app component
 */
@Injectable()

export class SideNavigationService {
  /** 
    * a subject that toggles a state variable on each click on the side navigation icon
  */
  private headerSource = new Subject <boolean> ();  
  /**
    * makes the subject as an observable  
  */
  headerstate$ = this.headerSource.asObservable();                 
    
  /**
   * Sends the state variable to the "app" component
   * @param message a state variable that originates from the "navbar" component 
   */
  sendState(message: boolean) {       /**pushing the message sent from header */
    this.headerSource.next(message);      
  }
  
}