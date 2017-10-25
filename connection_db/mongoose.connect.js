import mongoose from 'mongoose';

export default (URI) => {
  mongoose.connect(URI);
  mongoose.Promise = Promise;

  mongoose.connection.on('connected', () => console.log(`Connected: ${URI}`));
  mongoose.connection.on('disconnected', () => console.log('Disconnected'));
  mongoose.connection.on('error', (e) => console.log('Error na conexão: ${e}'));
}
