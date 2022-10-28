import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { NavigateService } from '../services/navigate.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Room } from '../Frontend-Models/room';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { MarkerService } from '../services/marker.service';
import { icon, Marker } from 'leaflet';

const iconRetinaUrl = './assets/marker-icon-2x.png';
const iconUrl = './assets/marker-icon.png';
const shadowUrl = './assets/marker-shadow.png';
const iconDefault = icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
Marker.prototype.options.icon = iconDefault;

/**
 * a component that allows users to navigate from one building to another with the campus of the university 
*/

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, AfterViewInit, OnDestroy {
    /**
     * A leaflet map global variable in which the map will be defined 
    */
    public map;
    /**
     * Longtitude of point A 
    */
    coordinatesLongA:string;
    /**
     * Langitude of point A
    */
    coordinatesLatA:string;
    /**
     * Longtitude of point B
    */
    coordinatesLongB:string;
    /**
     * langtitude of point B
    */
    coordinatesLatB:string;
    /**
     * A leaflet LatLng variable for point A
    */
    public latlngA : L.LatLng;
    /**
     * A leaflet LatLng variable for point B 
    */
    public latlngB :L.LatLng;
    /**
     * A leaflet layer for markers, different than tiles layer
    */
    layer: L.LayerGroup;
    /**
     * A leaflet Routing variable 
    */
    route; 
    /**
     * A leaflet marker variable for point A 
    */
    marker;
    /**
     * A leaflet marker variable for point B 
    */
    secondMarker;
    /**
     * rooms list that will be linked to <mat-select> in HTML
    */
    rooms = ['A101', 'A201', 'A301', 'A401', 'B101', 'C201', 'D301', 'E401', 'F401', 'G401' ];
    /**
     * a variable used to prevent multiple dialog messages from showing in User interface once the user clicks on read QR code button and selects a room from the list at the same time.  
    */
    dialogStatus: boolean =false;
    /**
     * A boolean to enable the navigate icon only if both QR icon has been clicked and a room have been selected from the form
     */
    enabled:boolean = true;
    /**
     * A boolean to enable the clear Marker button only if Navigate Icon have been pressed
     */
    enabledClear:boolean = true;
 
   /**
    * Constructor
    * @param navigate A service to fetch RoomsModel JSON objects from server and send their long/lat coordinates to "MarkerService" where they are treated as observables 
    * @param dialog Angular Material component
    * @param markerSer Defines two subjects; marker for point A and a marker for point B in order to send the coordinates of both markers to subscribed components 
    */
    constructor( private navigate: NavigateService, public dialog: MatDialog, private markerSer: MarkerService) { }
   /**
    * Empty ngOnInit
    */
    ngOnInit(): void {}

    /**
     * subscribes to coordinates observables of point A and point B using the "Marker Service"
     * 
     * Point A is the selected Room from the list
     * 
     * Point B is the QR room
     * 
     * stores the recieved array of Lat/Lng coordiantes in a separate lat coordiantes variable and lng coordinates variable for both points A and B
     * 
     * creates a LatLng leaflet variable out of lat coordiantes variable and lng coordinates variable for both points. 
    */
    ngAfterViewInit(): void {
      this.initmap();
      this.markerSer.markerAstate$.subscribe(coordinates => { this.coordinatesLongA= coordinates[0];
        this.coordinatesLatA= coordinates[1];
        this.latlngA = L.latLng(parseFloat(this.coordinatesLatA),parseFloat(this.coordinatesLongA));
        console.log(this.latlngA);
      });
      this.markerSer.markerBstate$.subscribe(coordinates => { this.coordinatesLongB= coordinates[0];
        this.coordinatesLatB= coordinates[1];
        this.latlngB = L.latLng(parseFloat(this.coordinatesLatB),parseFloat(this.coordinatesLongB));
        console.log(this.latlngB);
      });
    }
      /**
       * instantiates a leaflet map variable and sets the focus view on TH deggendorf coordinates
       * 
       * creates a tilelayer from openstreetmap and sets the maximum zoom to 18
       * 
       * adds the tiles layer to the map
       * 
       * creates a Marker layer and adds it to the map
      */
      private initmap(): void {
        this.map = L.map('map').setView([48.8296,12.9547], 17.5); 
        const tiles= L.tileLayer ('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
          maxZoom: 18, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }); 
        tiles.addTo(this.map);
        this.layer =L.layerGroup().addTo(this.map);  
      }

      /**
       * on clicking navigation Icon, it checks if there is previous route, it will clear them from the map
       * 
       * it checks if there are previous markers on the map, it clears the layer of markers
       * 
       * creates a point A marker with leaflet latlng variable as an argument and adds it to the marker layers.
       * 
       * creates a point B marker with leaflet latlng variable as an argument and adds it to the marker layers.
       * 
       * create a Leaflet route between both points and adds it to the map 
       * @param map the instantiated Leaflet map variable
      */
    makeMarker( map: L.Map): void {
      this.enabledClear= false;
      if(this.route)
      this.route.remove();
      if(this.marker && this.secondMarker)
      this.layer.clearLayers();
      this.marker = L.marker(this.latlngA).addTo(this.layer);
      this.secondMarker = L.marker(this.latlngB).addTo(this.layer);
      this.route = L.Routing.control({ router: L.Routing.osrmv1({}),showAlternatives: false,
      show: true,
      routeWhileDragging: false, waypoints:[this.latlngB,this.latlngA]}).addTo(this.map);
    };
    
    /**
     * clears the markers layer from the map
     * 
     * clears the routes from the map 
    */
    clearMarkers() {
      this.layer.clearLayers();
      this.route.remove();
    }





    /**
     * uses the "navigate service" to Find one RoomsModel Json object from the server, in which RoomsModel's "room" property matches the room selected from the list in HTML template 
     * 
     * waits 700 milli second till the fetch request is finished,
     * 
     * checks whether the fetched RoomsModel Json object matches the fetched RoomsModel JSON object of the "fetchQRroom" method
     * 
     * then it shows a dialog that corresponds to the result; "Room match"/"No room match"
     * 
     * one Dialog message can be shown either that of "fetchSelectedRoom" or "fetchQRroom" methods since "fetchSelectedRoom" method's dialog message is only shown when the "dialogStatus" variable is set to false on the other hand "fetchQRroom" method's dialog message is only shown when the "dialogStatus" variable is set to true.
     * 
     * clicking on QR icon in HTML set the dialog status to true
     * 
     * selecting a room from the list in HTML set the dialog status to false
     * @param room Selected room from a list in HTML template
     */
    fetchSelectedRoom(room : string) {
      
      const oneRoom: Room= {room: room, building: "", floor: "", long: "", lat: ""};
      this.navigate.fetchRoomFromServer(oneRoom);
      this.dialogStatus = false;
        if( this.navigate.location != null) {
          setTimeout(() => {
            if (this.navigate.selectedRoom.room == this.navigate.location.room ) {
              console.log("room match");
              if (!this.dialogStatus) {
                const dialogRef= this.dialog.open(DialogComponent, {data: { name: "room match"}, height: '230px', width: '600px'} );
                dialogRef.afterClosed().subscribe(result => {
                this.dialogStatus= result; 
                });  
              }
            }
            else {
              console.log("no room match");
              console.log(this.navigate.selectedRoom.room);
              console.log(this.navigate.location.room);
              console.log(this.navigate.location);
              if (!this.dialogStatus) {
                const dialogRef =this.dialog.open(DialogComponent, {data: { name: "no room match",  roomSet: this.navigate.selectedRoom, roomQR: this.navigate.location}, height: '230px', width: '600px'} ); 
                  dialogRef.afterClosed().subscribe(result => {
                    this.dialogStatus= result;
                  });
              }  
            }
          },700);
        }
    } 
    /**
     * uses the "navigate service" to fetch any RoomsModel JSON object from the aggregate 
     * 
     * waits 700 milli second till the fetch request is finished,
     * 
     * checks whether the fetched RoomsModel Json object matches the fetched RoomsModel JSON object of the "fetchSelectedRoom" method
     * 
     * then it shows a dialog that corresponds to the result; "Room match"/"No room match"
     * 
     * one Dialog message can be shown either that of "fetchSelectedRoom" or "fetchQRroom" method since "fetchSelectedRoom" method's dialog message is only shown when the "dialogStatus" variable is set to false on the other hand "fetchQRroom" method's dialog message is only shown when the "dialogStatus" variable is set to true.
     * 
     * clicking on QR icon in HTML sets the dialog status to true
     * 
     * selecting a room from the list in HTML set the dialog status to false
     */
    fetchQRroom() {
      this.enabled= false;
      this.dialogStatus = true;
      this.navigate.fetchFromServer();
      if( this.navigate.selectedRoom != null) {
        setTimeout(() => { 
          if (this.navigate.selectedRoom.room == this.navigate.location.room ) {   
            console.log(" room match");
            if (this.dialogStatus) {
              const dialogRef = this.dialog.open(DialogComponent, {data: { name: "room match"}, height: '230px', width: '600px'});  
              dialogRef.afterClosed().subscribe(result => {
                this.dialogStatus= !result;
              });  
            }   
          }
          else {
            console.log("no room match");
            console.log(this.navigate.selectedRoom.room);
            console.log(this.navigate.location.room);
            console.log(this.navigate.location);
            if (this.dialogStatus) {
              const dialogRef = this.dialog.open(DialogComponent, {data: { name: "no room match",  roomSet: this.navigate.selectedRoom, roomQR: this.navigate.location}, height: '230px', width: '600px' } ); 
              dialogRef.afterClosed().subscribe(result => {
                this.dialogStatus= !result; 
              }); 
            }
          } 

        } ,700);
      }
    }
    /**
     * nulls the location variable and selectedRoom variable that are returned from the HTTP requests in the "Navigate service" on component destruction 
    */
    ngOnDestroy() {
            this.navigate.location= null;
            this.navigate.selectedRoom= null;
    }




}





