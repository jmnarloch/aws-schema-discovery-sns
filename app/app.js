const AWS = require('aws-sdk');

exports.lambdaHandler = async (event, context) => {
    try {
        var eventbridge = new AWS.EventBridge();
        var entries = [];
        event.Records.forEach(record => entries.push({
            Source: process.env.event_source,
            DetailType: process.env.event_detail_type,
            Detail: record.Sns.Message,
            Time: new Date()
        }));
        return eventbridge.putEvents({
            Entries: entries
        }).promise();
    } catch (err) {
        console.log(err, err.stack);
        throw err;
    }
};
