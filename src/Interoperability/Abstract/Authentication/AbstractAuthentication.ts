import fetch from 'isomorphic-unfetch'
import {Configurations} from '../../../Config/config'
import { Headers } from '../../Model/Authentication/authentication-model';
import { Credentials } from '../../Model/Authentication/authentication-model';

export abstract class AbstractAuthentication{

    username: string;
    password: string;
    apiKey: string;
    url: string;

    constructor(username: string, password: string, apiKey: string){
        this.username = username;
        this.password = password;
        this.apiKey = apiKey;
        this.url = Configurations.baseURL;
    }

    ToolTest = (): void =>{
        console.log("Welcome to Interoperability tool " + this.username);
    }

    AccessApiEndPoint = (resource_route: string, req_headers: Headers,  options?: RequestInit): object =>{
        const req_url = this.url + resource_route;

        const headers = {
            "Content-Type": "application/json",
            "api-key": this.apiKey,
        }

        const config = {
            ...options,
            headers
        }

        return fetch(req_url, config).then(response =>{
            if(response.ok){
                return response.json();
            }else{
                throw new Error(response.statusText);
            }
        })
    }

    public abstract AuthenticateUser(header_opts: object, req: object): string

}
