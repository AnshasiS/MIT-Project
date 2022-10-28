import { AfterViewInit, Component, OnInit , ViewChild} from '@angular/core';
import { Events } from './eventsmodel';
import { HttpService } from './http.service';
import { MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
/**
 * this components shows events that are planned for the year. 
 */
@Component({
  selector: 'app-lectures-plan',
  templateUrl: './lectures-plan.component.html',
  styleUrls: ['./lectures-plan.component.scss']
})

export class LecturesPlanComponent implements OnInit, AfterViewInit {
 
  @ViewChild(MatPaginator) paginator : MatPaginator;
  /**
   * instantiating a mat table data source with Events Model as parameter
   */
  dataSource = new MatTableDataSource<Events>();   
  /**
   * specifying which properties of the Event model I would like to show in the table
   */
  displayedColumns = ['description','organiser','label', 'name', 'begin','end']; 
  /**
   * Constructor
   * @param eventsService a get HTTP service for fetching Event Model JSON objects from mongoDB
   */ 

  constructor( public eventsService : HttpService) { }

  /**
    * on component initilization a get HTTP request is performed 
    * 
    * it fetches the Event model Json objects from mongoDB
    * 
    * mat table data is filled with data after a time out of 1500 milli seconds, so that get HTTP request has finished fetching the JSON objects  
  */
  ngOnInit() {  
    this.eventsService.getEventInfoFromServer();
    setTimeout(() => {this.dataSource.data = this.eventsService.event},1500); 
  }
    /**
      * after the component views have been fully initialized, the paginator is set 
    */
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }
  
    /**
      * A method for filtering the table
      * @param filterValue the input that is filled in the form field (filter text field)
    */
    filter( filterValue : string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

}





