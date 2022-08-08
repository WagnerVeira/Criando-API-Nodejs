const carrosService = require('../services/carro.service');

const findAllCarrosController = (req, res) => {
  const carros = carrosService.findAllCarrosService();
  res.send(carros);
};

const findByIdCarroController = (req, res) => {
  const idParam = Number(req.params.id);
  const chosenCarro = carrosService.findByIdCarroService(idParam);
  res.send(chosenCarro);
};

const createCarroController = (req, res) => {
  const carro = req.body;
  const newCarro = carrosService.createCarroService(carro);
  res.send(newCarro);
};

const updateCarroController = (req, res) => {
  const idParam = +req.params.id;
  const carroEdit = req.body;
  const updatedCarro = carrosService.updateCarroService(idParam, carroEdit);
  res.send(updatedCarro);
};

const deleteCarroController = (req, res) => {
  const idParam = req.params.id;
  carrosService.deleteCarroService(idParam);
  res.send({ message: 'Carro deletado com sucesso!' });
};

module.exports = {
  findAllCarrosController,
  findByIdCarroController,
  createCarroController,
  updateCarroController,
  deleteCarroController,
};
