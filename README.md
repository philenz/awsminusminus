### AWS--

* Frontend for [AWS++](https://github.com/philenz/awsplusplus.git)

##### Notes

* Deployed to an S3 bucket as a static website
* CloudFront sits in front of the website
* Uses [DataTables](https://datatables.net/)
* Uses [Cognito User Pool](http://docs.aws.amazon.com/cognito/latest/developerguide/getting-started-with-cognito-user-pools.html)
* Uses [Cognito SDK](https://github.com/aws/amazon-cognito-identity-js/); [Examples](http://docs.aws.amazon.com/cognito/latest/developerguide/using-amazon-cognito-user-identity-pools-javascript-examples.html); [Developer Resources](https://aws.amazon.com/cognito/dev-resources/)
* Uses [AWS JavaScript SDK](https://sdk.amazonaws.com/builder/js/); [API Reference](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/top-level-namespace.html)
* Test APIs using Postman --> [export API from API Gateway](https://www.getpostman.com/aws)
* Early example of Postman API in etc directory
* Detailed [tech docs](https://docs.google.com/document/d/15RVTy_AeP72Prrm95TconbeW_f7KfU8dC8ifU7lhLJA/edit#) (_currently private_) 

##### Cognito Set Up

* Create a User Pool
* Create an App client --> Ensure no secret key

##### ToDo

* Add ingress rules to Manage Security Groups
* Functionality to roll access keys added to Manage Access Keys
