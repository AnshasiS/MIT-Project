

/**
 *  a Model that is used for storing the langtitude and longtitude of a room, to be used later in navigation service
 */
export class Room {
    /**
     * optional attribute
     */
     public id?: string;
     /**
      * constructor for RoomsModel, will be used in the navigate service and marker service
      * @param room Room number
      * @param floor Floor of the room
      * @param building Building label in which the room exists
      * @param long Longtitude coordinate of the building
      * @param lat Langtitude coordinate of the building
      */
    constructor( public room: string, public floor: string, public building: string, public long: string, public lat: string) {} 
}

