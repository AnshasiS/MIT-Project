import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


/** 
 * Defines two subjects; marker for point A and a marker for point B in order to send the coordinates of both markers to subscribed components 
 * 
*/

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
    /** 
     * a subject that represents the longtitude and langtitude of point A
    */
    private markerSourceA = new Subject <string[]> ();  
    /**
     * makes the subject as an observable  
    */
    markerAstate$ = this.markerSourceA.asObservable();
    /** 
     * a subject that represents the longtitude and langtitude of point B
    */
    private markerSourceB = new Subject <string[]> ();  
    /**
     * makes the subject as an observable  
    */
    markerBstate$ = this.markerSourceB.asObservable();
    /**
     * Sends the langtitude and longtitude of point A to "Navigation" component
     * @param coordinates Lat/Long coordinates of a point A
    */
    sendState(coordinates: string[]) {       
      this.markerSourceA.next(coordinates);    
    }
    /**
      * Sends the langtitude and longtitude of point B to "Navigation" component
      * @param coordinates  Lat/Long coordinates of a point B
      */
    sendState2(coordinates: string[]) {       
      this.markerSourceB.next(coordinates);
    }
  constructor() { }
}
