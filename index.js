import DynamoDB from "aws-sdk/clients/dynamodb";

const apiVersion = "2012-08-10";
const db = new DynamoDB({
  apiVersion,
  region: "us-east-1",
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY
});

const params = {
  TableName: "mario",
  AttributesToGet: ["first_name", "last_name"]
}

async function loadEntries() {
  try {
    const result = await db.scan(params).promise();
    document.write(JSON.stringify(result));
  } catch(e) {
    console.error(e);
  }
};

loadEntries();
