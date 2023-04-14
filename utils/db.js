import mongoose from 'mongoose';

mongoose.set('strictQuery', false);
const connection = {};

async function connect() {
  if (connection.isConnected) {
    console.log('already connected');
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    console.log('new connection');
    connection.isConnected = db.connections[0].readyState;
  } catch (err) {
    console.log('failed to connect, trying again...');
    await connect();
  }
}

async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === 'production') {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log('not disconnected');
    }
  }
}


function convertDocToObj(doc) {
  doc._id = doc._id.toString();
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();
  return doc;
}

const db = { connect, disconnect, convertDocToObj };
export default db;

