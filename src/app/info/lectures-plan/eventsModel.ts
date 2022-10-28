import { calendarEntry} from './calenderEntry'
/**
 * A model that resembles the events that are going to happen during the current semester, for instance lectures plan.
 */
export interface Events {
    /**
     * optional attribute
     */
    id?: string;  
    /**
     * organiser of the event
     */
    organiser: string;
    /**
     * label of the event
     */
    label: string;
    /**
     * description of the event
     */
    description: string;
    /**
     * extra information about the event; such as Starting/Ending Day/Date of the event as well as the semester in which the event will take place 
     */
    info: calendarEntry;  
}   

        
    

    
    