import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Lecture } from './lectureModel';

/**
 * A service for fetching specific LecturesModel JSON object that is going to be held in a specific room ID and at a specific date/time from database (free rooms)
*/
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  /**
   * transformed JSON object to user defined data model 
  */
  lectures: Lecture[] = [];
  /**
   * constructor
   * @param http angular HTTPClient service
  */
  constructor(private http : HttpClient) { }

  
    /**
      * invokes a get Http request to the API 
      * 
      * returned Json Objects are restructured to User defined Model, and stored in an array of that Model
      * @param id  ID of the room set by the user in the form 
      * @param dateTime Time and date set by the user in the ngform
    */
  
    getLectureInfoFromServer(id:any, dateTime: any) {
      /**
       * emptying array before initiating the request from server
       */
      this.lectures.splice(0, this.lectures.length);
      /**
       * transforming the JSON object to user defined Model 
       */
      let url = `https://thabella.th-deg.de/thabella/opn/period/findByRoom/${id}/${dateTime}`;
      this.http.get< {object :any}>(url)  
          .pipe(map((response :any) => {  
            for ( let x in response) {
              this.lectures.push(response[x]); 
            };
            return this.lectures.map(x => { return { 
              description: x.description,
              organiser: x.organiser,
              startDateTime: x.startDateTime,
              participants: x.participants
            }});
          }))
      /**
        * storing the transformed Json object to user defined Exam model in exam array
        */
      
        .subscribe( fetcheddata => { 
          console.log(fetcheddata);
          for (let x in fetcheddata) {
            this.lectures[x] = fetcheddata[x];
            console.log(fetcheddata[x]);
          }
          
        });


    }


}







