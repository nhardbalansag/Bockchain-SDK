import InterOperability from 'interoperability-sdk-tool'

const auth = new InterOperability("usernametest", "123", "l9Gog782sQV1Ez4nF3sv4XBH2hicEIOq5JfofXCJskOFzCop4K")

// auth.Test("Adsfas")
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
).then((arg) => {
    console.log(arg)
});