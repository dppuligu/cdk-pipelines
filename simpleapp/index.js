var AWS = require('aws-sdk'),
    region = "us-west-2",
    secretName = "token_examples_repo",
    secret,
    decodedBinarySecret;

console.log("adjusted git ignore bala blah")
// var client = new AWS.SecretsManager({
//     region: region
// })
// client.getSecretValue({SecretId: secretName}, function(err, data) {
//     if(err) {
//         console.log("error")
//         throw err    
//     }
//     else {
//         if ('SecretString' in data) {
//             secret = data.SecretString
//         }
//     }
//     console.log(secret)
// })