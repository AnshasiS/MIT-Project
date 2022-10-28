import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Mensa } from './mensaModel';
/**
 * A service for fetching MensaModel JSON objects from database ( Mensa menu)
 */

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  /**
   * contains the JSON objects returned from the HTTP request 
   */
  mensas=[];  // before transformation
  /**
   * transformed JSON object to user defined data model
   *  
   */
  mensa: Mensa[] = []; // after transformation
  /**
   * 
   * @param http angular HTTPClient service
   */
  constructor(private http : HttpClient) { }
  /**
   * invokes a get Http request to the API 
   * 
    * returned Json Objects are restructured to User defined Model, and stored in an array of that Model
  */
  getMensaInfoFromServer() {
      /**
        * emptying both arrays before initiating the request from server
      */
      this.mensas.length=0;
      this.mensa.length=0;
    
      this.http.get< {object :any}>('http://localhost:3000/mensa') 
        /**
         * transforming the JSON object to user defined Model 
         */ 
      .pipe(map((response :any) => {   
        for ( let x in response) {
          this.mensas.push(response[x]);
        };
          return this.mensas.map(x => { return { 
                day:x.day,
                mainPlate: x.mainPlate,
                salad: x.salad,
                drinks: x.drinks,
                price: x.price,
                openingTime: x.openingTime,
                closingTime: x.closingTime,}
          });
        
      }))
      /**
      * storing the transformed Json object to user defined Exam model in exam array
      */
      .subscribe( fetcheddata => { 
        for (let x in fetcheddata) {
          this.mensa[x] = fetcheddata[x];
          console.log("reached");
        }
        
      });
        
  }

}







