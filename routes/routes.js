import  ComputadorController from '../controllers/ComputadorController';

const computadorController = new ComputadorController();

export default(app) => {
  app.route('/computadores')
    .get((req, res) => {
      computadorController.getAll(req, res)
        .then((result) => res.json(result))
        .catch((error) => res.send(error).end())
    })
    .post((req, res) => {
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
