import Computador from '../models/computador';

class ComputadorController {
  getAll (req, res) {
    return Computador.find()
      .then(result => res.json(result))
      .catch(error => res.send(error).end());
  }

  getById (req, res) {
    const params = req.params;
    return Computador.findOne({"_id": params.id})
      .then(result => res.json(result))
      .catch(error => res.send(error).end());
  }

  update (req, res) {
    const params = req.params;
    const data = req.body;

    let computador = {
      "marca": data.marca,
      "valor": data.valor,
      "placa": data.placa,
      "fonte": data.fonte,
      "processador": data.processador,
      "imagem": data.imagem
    }

    return Computador.findByIdAndUpdate(params.id, computador)
      .then(result => {
        result.marca = computador.marca
        result.valor = computador.valor
        result.placa = computador.placa
        result.fonte = computador.fonte
        result.processador = computador.processador
        result.imagem = computador.imagem

        res.json(result)
      })
      .catch(error => res.send(error).end());
  }

  create (req, res) {
    const data = req.body;
    const computador = new Computador(data);

    return computador.save()
      .then(result => res.json(result))
      .catch(error => res.send(error).end());

  }

  delete (req, res) {
    const params = req.params;
    return Computador.remove({"_id": params.id})
      .then(result => res.send(result))
      .catch(error => res.send(error).end());

  }
}

export default ComputadorController
