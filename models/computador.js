import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let computadorSchema = new Schema({
  nome: String,
  valor: Number,
  placa: String,
  fonte: String,
  processador: String,
  monitor: String,
  cpu: String
});

export default mongoose.model('computador', computadorSchema);