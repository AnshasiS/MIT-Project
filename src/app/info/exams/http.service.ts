import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Exam } from './examModel';
/**
 * A service for fetching ExamsModel JSON objects from database (Exams schedule)
 */
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  /**
   * contains the JSON objects returned from the HTTP request
   *  
   */
  exams=[];  // before transformation
  /**
   *  transformed JSON object to user defined Exam model
   */
  exam: Exam[] = []; // after transformation
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
  
  getExamInfoFromServer() {
      /**
       * emptying both arrays before initiating the request from server
       */
      this.exam.splice(0, this.exam.length);
      this.exams.splice(0, this.exams.length);
    
      
    this.http.get< {object :any}>('http://localhost:3000/exams') 
      /**
       * transforming the JSON object to user defined Model 
       */ 
      .pipe(map((response :any) => {   
              for ( let x in response) {
                this.exams.push(response[x]);
              };
        return this.exams.map(x => { return { 
             subject: x.subject,
             courseOfStudy: x.courseOfStudy,
             day: x.day,
             time: x.Time,
             duration: x.duration,
             room: x.room,
             examiner: x.examiner,
             semester: x.semester,
             type: x.type,

        }});
        
      }) )
      
     /**
      * storing the transformed Json object to user defined Exam model in exam array
      */
      .subscribe( fetcheddata => { 
        for (let x in fetcheddata) {
          this.exam[x] = fetcheddata[x];
        }
      });


  }


}







