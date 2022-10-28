//import { stringify } from 'querystring';
/**
 * a Model that represents user credentials; username, email and password
 */
export class Users {
    /**
     * optional attribute
     */
    id?: string;  
    /**
     * constructor of user credentials, will be used in the credentialPost service and Autherization service
     * @param Name Name of the user
     * @param email Email of the user
     * @param password Password of the user
     */
    constructor (  public Name: string, public email: string, public password: string) {
        this.Name = Name;
        this.email = email;
        this.password = password;
       
        
    }
}
