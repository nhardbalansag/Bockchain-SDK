import { AbstractAuthentication } from '../../Abstract/Authentication/AbstractAuthentication';
import { Headers } from '../../Model/Authentication/authentication-model';
import { Credentials } from '../../Model/Authentication/authentication-model';
export declare class Authentication extends AbstractAuthentication {
    Test: (param: string) => void;
    AuthenticateUser: (header_opts: Headers, req: Credentials) => any;
}
