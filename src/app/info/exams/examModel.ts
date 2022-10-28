
/**
 * a model for the exam schedule 
 */

export interface Exam {
    /**
     * optional attribute
     */
    id?: string;  
    /**
     * exam's subject
     */
    subject: string;
    /**
     * the exam belong to which course of study
     */
    courseOfStudy: string;
    /**
     * the day at which the exam will take place
     */
    day: string;
    /**
     * the time at which the exam will take place
     */
    time: string; 
    /**
     * duration of the exam
     */
    duration: string;
    /**
     * room at which the exam will take place
     */ 
    room: string;
    /**
     * examiner name
     */
    examiner: string;
    /**
     * the exam belongs to a subject that is taken in which semester?
     */
    semester: string;
    /**
     * type of the exam; PSTA/ written/Oral
     */
    type: string;
   
}