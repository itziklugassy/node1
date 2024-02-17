import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import car1Image from './images/Tesla Model Y Long Range UK 019_tswxae.webp'; // Importing car1 image
import car2Image from './images/Tesla Model Y Long Range UK 019_tswxae.webp'; // Importing car2 image
import car3Image from './images/Tesla Model Y Long Range UK 019_tswxae.webp'; // Importing car3 image
import car4Image from './images/Tesla Model Y Long Range UK 019_tswxae.webp'; // Importing car4 image

// Car Component
const Car = ({ car, onDelete, onUpdate }) => {
  const { id, name, image } = car;
  const [newName, setNewName] = useState(name); // State to hold the new name for updating

  // Function to handle deletion of the car
  const handleDelete = () => {
    onDelete(id);
  };

  // Function to handle updating the car name
  const handleUpdate = () => {
    onUpdate(id, newName);
  };

  // Function to handle changes in the input field for updating the car name
  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5> {/* Displaying the car name as a title */}
          <input type="text" value={newName} onChange={handleChange} className="form-control mb-2" />
          <button className="btn btn-danger mr-2" onClick={handleDelete}>Delete</button>
          <button className="btn btn-primary" onClick={handleUpdate}>Update</button>
        </div>
      </div>
    </div>
  );
};

// App Component
const App = () => {
  // State to hold the list of cars
  const [cars, setCars] = useState([
    { id: 1, name: 'Car 1', image: car1Image }, // Using imported car1 image
    { id: 2, name: 'Car 2', image: car2Image }, // Using imported car2 image
    { id: 3, name: 'Car 3', image: car3Image }, // Using imported car3 image
    { id: 4, name: 'Tesla Model Y Long Range UK 019', image: car4Image }, // Using imported car4 image
  ]);

  // Function to delete a car
  const deleteCar = (id) => {
    setCars(cars.filter(car => car.id !== id));
  };

  // Function to update the name of a car
  const updateCar = (id, newName) => {
    setCars(cars.map(car =>
      car.id === id ? { ...car, name: newName } : car
    ));
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Garage of Cars</h1>
      <div className="row">
        {/* Mapping through the list of cars and rendering Car component for each */}
        {cars.map(car => (
          <Car
            key={car.id}
            car={car}
            onDelete={deleteCar}
            onUpdate={updateCar}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
