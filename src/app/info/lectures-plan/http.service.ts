import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Events } from './eventsModel';
/**
 * A service for fetching EventsModel JSON objects from database (for instance lecture plans)
 */
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  /**
   * contains the JSON objects returned from the HTTP request 
   */
  events=[];  // before transformation
  /**
   * transformed JSON object to user defined data model
   */
  event: Events[] = []; // after transformation
  /**
   * 
   * @param http angular HTTPClient service
   */
  constructor(private http : HttpClient) {}
  /**
   * invokes a get Http request to the API 
   * 
    * returned Json Objects are restructured to User defined Model, and stored in an array of that Model
  */
  
  getEventInfoFromServer() {
    /**
       * emptying both arrays before initiating the request from server
       */
      this.event.splice(0, this.event.length);
      this.events.splice(0, this.events.length);
      
      /**
         * transforming the JSON object to user defined Model 
         */
        this.http.get< {object :any}>('https://thabella.th-deg.de/thabella/opn/api/events/20200318/')  
          .pipe(map((response :any) => {   
            for ( let x in response) {
              this.events.push(response[x]);
            };
            return this.events.map(x => { return { 
              description: x.description,
              organiser: x.organiser,
              label: x.label,
              info:{ end: x.calendarEntry.end, begin: x.calendarEntry.begin,  name: x.calendarEntry.name},  
            }}); 
          }))
      
            /**
              * storing the transformed Json object to user defined Exam model in exam array
            */
          .subscribe( fetcheddata => { 
            for (let x in fetcheddata) {
              this.event[x] = fetcheddata[x];
            }  
          });

        }
  
}







