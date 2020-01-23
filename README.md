# aws-schema-discovery-sns

> An example application that demonstrates AWS EventBridge Schema integration with SNS.

## Setup

Make sure you have [SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html) installed on your workstation. 

## Usage

### Basic

For demonstration purposes you can build the project and deploy it into your own AWS account.

```
$ sam build
$ sam deploy --guided
```

If you want to modify the source topic to an existing one you can simply alter the `template.yaml` and pass the ARN of 
an existing SNS topic.  

## License

Apache 2.0
