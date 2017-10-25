import  ComputadorController from '../controllers/ComputadorController';
var fs = require('fs');


const computadorController = new ComputadorController();

export default(app) => {
  app.route('/computadores')
    .get((req, res) => {
      computadorController.getAll(req, res)
        .then((result) => res.json(result))
        .catch((error) => res.send(error).end())
    })
    .post((req, res) => {
      res.setHeader("Access-Control-Allow-Origin", "*");

      var path_origem = req.files.imagem.path;
      var path_destino = './upload/'+ req.files.imagem.originalFilename;;

      fs.rename(path_origem, path_destino, function (err) {
        if(err){
          res.status(500).json({error: err});
          return;
        }

      });

      computadorController.create(req, res)
        .then((result) => res.json(result))
        .catch((error) => res.send(error).end())
    })

  app.route('/computadores/:id')
    .put((req, res) => {
      computadorController.update(req, res)
        .then((result) => res.json(result))
        .catch((error) => res.send(error).end())
    })
    .get((req, res) => {
      computadorController.getById(req, res)
        .then((result) => res.json(result))
        .catch((error) => res.send(error).end())
    })
    .delete((req, res) => {
      computadorController.delete(req, res)
        .then((result) => res.json(result))
        .catch((error) => res.send(error).end())
    })
}
