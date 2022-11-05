import { AbstractAuthentication } from '../../Abstract/Authentication/AbstractAuthentication';
import { Headers } from '../../Model/Authentication/authentication-model';
import { Credentials } from '../../Model/Authentication/authentication-model';

export class Authentication extends AbstractAuthentication{

    Test = (param: string): void =>{
        this.ToolTest()
    }

    AuthenticateUser = (header_opts: Headers, req: Credentials): any =>{

        var resource_url : string = "auth"

        return this.AccessApiEndPoint(
            resource_url, 
            header_opts,
            {
                method: 'POST',
                body: JSON.stringify(req)
            },
        )
    }
}

const auth = new Authentication("usernametest", "123", "l9Gog782sQV1Ez4nF3sv4XBH2hicEIOq5JfofXCJskOFzCop4K")

auth.AuthenticateUser(
    {
        method      : "POST",
        apikey      : "l9Gog782sQV1Ez4nF3sv4XBH2hicEIOq5JfofXCJskOFzCop4K",
        key         : "apikey",
        ContentType : "application/json"
    },
    {
        apikey      : "l9Gog782sQV1Ez4nF3sv4XBH2hicEIOq5JfofXCJskOFzCop4K",
    }
).then((arg: any) => {
    console.log(arg)
});


auth.Test("bernard balansag")