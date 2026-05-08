import { Document, MongoClient } from "mongodb";

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let clientPromise: Promise<MongoClient> | undefined;

export function getClientPromise(): Promise<MongoClient> {
  if (clientPromise) return clientPromise;

  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("Missing MONGODB_URI");

  const connect = async () => {
    const client = new MongoClient(uri);
    const connected = await client.connect();
    return connected;
  };

  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
      global._mongoClientPromise = connect();
    }
    clientPromise = global._mongoClientPromise;
  } else {
    clientPromise = connect();
  }

  return clientPromise;
}

export async function getCollection<T extends Document>(name: string) {
  const client = await getClientPromise();
  return client.db().collection<T>(name);
}