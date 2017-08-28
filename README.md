### AWS--

* Frontend for [AWS++](https://github.com/philenz/awsplusplus.git)
* The initial code was generated from AWS++ by running _chalice generate-sdk_

##### Notes

* S3 bucket awsplusplus created as a static website
* Currently bucket policy allowing public read
* Put CloudFront in front at some stage
* Uses https://datatables.net/
* Uses [Cognito User Pool](http://docs.aws.amazon.com/cognito/latest/developerguide/getting-started-with-cognito-user-pools.html)
* Cognito SDK: https://github.com/aws/amazon-cognito-identity-js/

##### Bug

* The code generated is incorrect where we want to specify a path
* We need to update apigClient.js as discussed here... https://stackoverflow.com/questions/35963037/setting-path-parameters-in-aws-api-gateway-javascript-sdk

