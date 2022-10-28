import { AfterViewInit, Component, OnInit , ViewChild} from '@angular/core';
import { Mensa } from './mensaModel';
import { HttpService } from './http.service';
import { MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

/**
 * this components shows Mensa Menu. 
 */
@Component({
  selector: 'app-mensa',
  templateUrl: './mensa.component.html',
  styleUrls: ['./mensa.component.scss']
})

export class MensaComponent implements OnInit, AfterViewInit {
 
  @ViewChild(MatPaginator) paginator : MatPaginator;
  /**
   * instantiating a mat table data source with Mensa Model as parameter
  */
  dataSource = new MatTableDataSource<Mensa>();  
  /**
   * specifying which properties of the Mensa model I would like to show in the table
  */
  displayedColumns = ['day','mainPlate','salad','drinks', 'price', 'openingTime','closingTime'];
  /**
   * Constructor
   * @param mensaService a get HTTP service for fetching Mensa Model JSON objects from mongoDB
  */  
 constructor( public mensaService : HttpService) { }
  /**
      * on component initilization a get HTTP request is performed 
      * 
      * it fetches the Mensa model Json objects from mongoDB
      * 
      * mat table data is filled with data after a time out of 1500 milli seconds, so that get HTTP request has finished fetching the JSON objects  
    */
  ngOnInit() {  
    this.mensaService.getMensaInfoFromServer();
    setTimeout(() => {this.dataSource.data = this.mensaService.mensa;},1500)
      
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

