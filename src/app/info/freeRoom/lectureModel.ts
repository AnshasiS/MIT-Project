/**
 * A model that represents lectures that are taking place in a specific room at a certain Date/time
 */

export interface Lecture {
    /**
     * optional attribute
     */
    id?: string; 
    /**
     * description of the subject teached
     */ 
    description: string;
    /**
     * the lecturer 
     */
    organiser: string;
    /**
     * at what time the lecture starts on that chosen date
     */
    startDateTime: string;
    /**
     * Lecture audience, from which faculty ? 
     */
    participants : string;
}
