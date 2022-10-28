 import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthorizationService } from './services/authorization.service';
/**
 * Clones outgoing HTTP requests and adds an authorization header to the JWT ( JSON web Token)
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    /**
     * constructor
     * @param AuthService A service which authenticates users
     */
    constructor(private AuthService: AuthorizationService) {}
    /**
     * intercepts outgoing HTTP request and appends an authorization header to the Token
     * @param req any outgoing HTTP request
     * @param next next HTTP request handler
     */
    intercept(req: HttpRequest<any>, next: HttpHandler)  {   
        const AuthToken = this.AuthService.getToken();
        const authRequest = req.clone({
            headers : req.headers.set('Authorization', "Bearer " + AuthToken)});
        return next.handle(req);
    }

}