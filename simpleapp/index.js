var AWS = require('aws-sdk'),
    region = "us-west-2",
    secretName = "token_examples_repo",
    secret,
    decodedBinarySecret;

console.log("adjusted git ignore bala blah")

var artifactzip = process.env.CODEBUILD_SOURCE_VERSION

var bucket = artifactzip.slice(13, artifactzip.indexOf('/'))

console.log(artifactzip)
console.log(bucket)
var client = new AWS.S3({
    region: region
})

var params = {
    Bucket: bucket,
    Key: "config.yaml"
}

client.getObject(params, function(err, data) {
    if (err) {
        console.log(err)
    }
    else {
        console.log(data.Body.toString('ascii'))
    }
})

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