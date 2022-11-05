import { Headers } from '../../Model/Authentication/authentication-model';
export declare abstract class AbstractAuthentication {
    username: string;
    password: string;
    apiKey: string;
    url: string;
    constructor(username: string, password: string, apiKey: string);
    ToolTest: () => void;
    AccessApiEndPoint: (resource_route: string, req_headers: Headers, options?: RequestInit) => object;
}
