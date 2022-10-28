import { AfterViewInit, Component, OnInit , ViewChild} from '@angular/core';
import { Lecture } from './lectureModel';
import { HttpService } from './http.service';
import { MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
/**
 * a component for showing lectures occuring in a specific room at a certain time/date
 */
@Component({
  selector: 'app-free-room',
  templateUrl: './freeRoom.component.html',
  styleUrls: ['./freeRoom.component.scss']
})

export class FreeRoomComponent implements OnInit, AfterViewInit {
 
  @ViewChild(MatPaginator) paginator : MatPaginator;
  /**
   * instantiating a mat table data source with Lectures Models as parameters
   */
 dataSource = new MatTableDataSource<Lecture>();   
 /**
   * specifying which properties of the Lecture model I would like to show in the table
   */
 displayedColumns = ['description','organiser','participants','startDateTime'];  
 /**
  * a list of room ids that a user can select in the form, to be used in the HTML template
  */
 ID = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10' ];
 /**
  * a list of time slots that a user can select in the form, to be used in the HTML template
  */
 time = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00' ];
 /**
  * a variable in which the selected room ID is stored in 
  */
 chosenID :string;
 /**
  * a variable in which the selected time slot is stored in 
  */
 chosenTime= "00:00";
 /**
  * a variable in which the selected date is stored in 
  */
 chosenDate= "Any Any 00 0000 00:00:00 GMT+0000 (Eastern European Standard Time)";
 /**
  * a variable in which chosen date and time are concatenated together 
  */
 chosenDateTime;
 /**
  * Constructor
  * @param lecturesService a get HTTP service for fetching lecture Model JSON objects from mongoDB
  */

  constructor( public lecturesService : HttpService) { }
 
    /**
     * empty ngOnInit
     */
    ngOnInit() { }
    /**
      * after the component views have been fully initialized, the paginator is set 
    */
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }
    /**
    * on component initilization a get HTTP request is performed 
    * 
    * it fetches lecture model Json objects from mongoDB
    * 
    * mat table data is filled with data after a time out of 1500 milli seconds, so that get HTTP request has finished fetching the JSON objects  
     * @param id room ID returned after invoking setID method
     * @param dateTime the concatenated chosenDateTime variable after setDate/ setTime method have been invoked
     */
    printdata(id: any, dateTime: any) {
      this.lecturesService.getLectureInfoFromServer(id, dateTime);
      setTimeout(() => {this.dataSource.data = this.lecturesService.lectures}, 1500);
    }
    /**
      * A method for filtering the table
      * @param filterValue the input that is filled in the form field (filter text field)
    */
    filter( filterValue : string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    /**
     * storing the selected room ID in chosenID variable 
     * @param x selected room ID from the form 
     */
    setID(x : string) {
      this.chosenID = x;
      console.log("Room ID", this.chosenID);
    }
    /**
     * storing the selected time slot in chosenTime variable
     * 
     * concatenating selected time slot in the chosenDateTime variable
     * @param x selected time slot from the form
     */
    setTime(x : any) {
      this.chosenTime = x;
      console.log("Time", this.chosenTime);
      this.chosenDateTime= this.chosenDate.substring(0,10) + " " + this.chosenTime.substring(0,5);
      console.log("Calling API with this Date/Time", this.chosenDateTime);
    }
    /**
     * storing the selected date in chosenDate variable
     * 
     * concatenating selected date in the chosenDateTime variable
     * @param date selected date from the form
     */
    setDate(date: any) {
      // takes the time zone difference into account
      const temp=  new Date(date.getTime()+ Math.abs(date.getTimezoneOffset()*60000) ) ;
      this.chosenDate= temp.toISOString();
      this.chosenDateTime= this.chosenDate.substring(0,10)+ " " + this.chosenTime.substring(0,5);
      console.log("Calling API with this Date/Time", this.chosenDateTime);
    }

}

