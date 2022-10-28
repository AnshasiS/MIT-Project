/**
 * A model that resembles the Mensa menu
 */
export interface Mensa {
    /**
     * optional attribute
     */
    id?: string;  
    /**
     * day at which the menu is offered
     */
    day: string;
    /**
     * main plate offered
     */
    mainPlate: string; 
    /**
     * Salad offered
     */
    salad: string;
    /**
     * drinks offered
     */
    drinks: string;
    /**
     * price of all items offered in the menu on that day
     */
    price: string;
    /**
     * opening time of the mensa
     */
    openingTime: string;
    /**
     * closing time of the mensa
     */
    closingTime: string; 
}











 