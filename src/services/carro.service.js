const carros = [
  {
    id: 1,
    modelo: 'Corsa',
    marca: 'Chevrolet',
    ano: '2015',
    preco: 25.985,
  },
  {
    id: 2,
    modelo: 'Celta',
    marca: 'Chevrolet',
    ano: '2009',
    preco: 16.699,
  },
  {
    id: 3,
    modelo: 'Civic',
    marca: 'Honda',
    ano: '2020',
    preco: 98.999,
  },
  {
    id: 4,
    modelo: 'Corolla',
    marca: 'Toyota',
    ano: '2018',
    preco: 86.599,
  },
];

const findAllCarrosService = () => {
  return carros;
};

const findByIdCarroService = (idParam) => {
  return carros.find((carro) => carro.id === idParam);
};

const createCarroService = (newCarro) => {
  const newId = carros.length + 1;
  newCarro.id = newId;
  carros.push(newCarro);
  return newCarro;
};

const updateCarroService = (id, carroEdited) => {
  carroEdited['id'] = id;
  const carroIndex = carros.findIndex((carro) => carro.id == id);
  carros[carroIndex] = carroEdited;
  return carroEdited;
};

const deleteCarroService = (id) => {
  const carroIndex = carros.findIndex((carro) => carro.id == id);
  return carros.splice(carroIndex, 1);
};

module.exports = {
  findAllCarrosService,
  findByIdCarroService,
  createCarroService,
  updateCarroService,
  deleteCarroService,
};
