import { AfterViewInit, Component, OnInit , ViewChild} from '@angular/core';
import { Exam } from './examModel';
import { HttpService } from './http.service';
import { MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
/**
 * this components shows the exam schedule, if the exam tab is clicked which resides in the info component 
*/
@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss']
})

export class ExamsComponent implements OnInit, AfterViewInit {
 
  @ViewChild(MatPaginator) paginator : MatPaginator;
  /**
   * instantiating a mat table data source with Exam Models as parameter
  */
  dataSource = new MatTableDataSource<Exam>();   // it assumes it as an array of the model
  /**
   * specifying which properties of the Exam model I would like to show in the table
  */
  displayedColumns = ['subject','courseOfStudy','day', 'time', 'duration','room','examiner','semester','type'];  // array of string from the table column
  /**
   * Constructor
   * @param examService a get HTTP service for fetching Exam Model JSON objects from mongoDB
  */
 constructor( public examService : HttpService ) { }
 
  /**
    * on component initilization a get HTTP request is performed 
    * 
    * it fetches the Exam model Json objects from mongoDB
    * 
    * mat table data is filled with data after a time out of 1500 milli seconds, so that get HTTP request has finished fetching the JSON objects  
  */
  ngOnInit() {  
    this.examService.getExamInfoFromServer();
    setTimeout(() => {this.dataSource.data = this.examService.exam},1500);
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


