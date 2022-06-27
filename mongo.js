const dotenv = require('dotenv');
dotenv.config();

const MONGO_CNSTRING = process.env.MONGO_CNSTRING;

const MONGO_CNSTRING = require('mongodb');


// Database Name
const dbName = 'projetowebfinal';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());