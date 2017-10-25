import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let computadorSchema = new Schema({
  marca: String,
  valor: Number,
  placa: String,
  fonte: String,
  processador: String,
  imagem: String
});

export default mongoose.model('computador', computadorSchema);
