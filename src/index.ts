import { AbstractAuthentication } from './Interoperability/Abstract/Authentication/AbstractAuthentication'
import { Authentication } from './Interoperability/Class/Authentication/authentication'
import { applyMixins } from "./Config/utils";

class InterOperability extends Authentication{
    
}

applyMixins(InterOperability, [Authentication]);

export default InterOperability;