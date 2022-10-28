import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from '../Frontend-Models/room';
import { MarkerService } from './marker.service';

/**
 * a service to fetch RoomsModel JSON objects from server and send their long/lat coordinates to "MarkerService" where they are treated as observables 
 */

@Injectable({
  providedIn: 'root'
})
export class NavigateService {
  /**
   * a random RoomsModel JSON object fetched from MongoDB
  */
  location: Room ;
  /**
   * fetched RoomsModel Json object in which Model's "room" property matches the room selected from a list of rooms in the submission form
   */
  selectedRoom;   
  
  /**
   * 
   * @param http Angulat HHTPClient service
   * @param markerSer A service that considers the longtitude and langtitude of 2 points as abservables and publish them to subscribed components
   */
  constructor(private http: HttpClient, private markerSer: MarkerService) { }
  /**
   * Simulates the QR code reading of a specific room
   * 
   * fetching a random RoomsModel JSON object from the server and assigning it to the location variable 
   * 
   *  sends the longtitude and langtitude coordinates of the fetched RoomsModel JSON object to the "markerService"  
   */
    fetchFromServer() {
      this.http.get< {object :any}>('http://localhost:3000/api/rooms')   // the json object we are getting from mongodb
        .subscribe( fetcheddata => { 
        const location = new Room(fetcheddata[0].room,fetcheddata[0].floor, fetcheddata[0].building, fetcheddata[0].long, fetcheddata[0].lat);
        this.location= location;
        console.log(this.location.building);
        this.markerSer.sendState2([this.location.long, this.location.lat]);  
      });
    }



  /**
   * fetches a RoomsModel JSON object from server in which RoomsModel's "room" property matches the room selected from the list in HTML template 
   * 
   * sends the longtitude and langtitude coordinates of the fetched RoomsModel JSON object to the "markerService" 
   * @param room submitted room number in the HTML form
   */
  fetchRoomFromServer(room : Room) {
    this.http.post ('http://localhost:3000/api/rooms', room)
    .subscribe(response => { console.log(response);
        this.selectedRoom= response;
        this.markerSer.sendState([this.selectedRoom.long, this.selectedRoom.lat]);
        console.log(this.selectedRoom.floor);
      });
  }


}
