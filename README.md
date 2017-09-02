### AWS--

* Frontend for [AWS++](https://github.com/philenz/awsplusplus.git)

##### Notes

* S3 bucket awsplusplus created as a static website
* Currently bucket policy allowing public read
* Put CloudFront in front at some stage
* Uses [DataTables](https://datatables.net/)
* Uses [Cognito User Pool](http://docs.aws.amazon.com/cognito/latest/developerguide/getting-started-with-cognito-user-pools.html)
* Uses [Cognito SDK](https://github.com/aws/amazon-cognito-identity-js/)
* Uses [AWS JavaScript SDK](https://sdk.amazonaws.com/builder/js/); [API Reference](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/top-level-namespace.html)

##### Cognito Set Up

* Create a User Pool
* Create an App client --> Ensure no secret key

##### ToDo

* Login page, then remove user and password from config
* Create new user page... must be a decent example somewhere!
