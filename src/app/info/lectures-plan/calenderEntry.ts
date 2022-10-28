/** 
 * an interface that will take part in the Events model
*/

export interface calendarEntry {  
    /**
     * Starting day/ Date of the event
     */
    begin: string;
    /**
     * Ending day/Date of the event
     */
    end: string;
    /**
     * semester in which the event will take place 
     */
    name: string;    
}