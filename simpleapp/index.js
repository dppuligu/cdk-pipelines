var AWS = require('aws-sdk'),
    region = "us-west-2",
    secretName = "token_examples_repo",
    secret,
    decodedBinarySecret;

console.log("adjusted git ignore bala blah")

var artifactzip = process.env.CODEBUILD_SOURCE_VERSION

var bucket = artifactzip.slice(14, artifactzip.indexOf('/'))

console.log(artifactzip)
console.log(bucket)
// var client = new AWS.S3({
//     region: region
// })

// var params = {
//     Bucket: "dppuligu-oregon",
//     Key: "config.yaml",
//     SSECustomerAlgorithm: "AES256",
//     SSECustomerKey: "949ea23e-5bde-4c14-a168-5b37f559f8c4"
// }

// client.getObject(params, function(err, data) {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log(data)
//     }
// })

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