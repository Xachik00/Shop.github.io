import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMillById } from "../../api";
import './DetaliPaje.css';

const DetaliPaje = () => {

  const { id } = useParams();
  const { name } = useParams();
  const [meal, setMeal] = useState([])

  useEffect(() => {
    getMillById(name, id).then(data => {
      console.log(data);
      setMeal(data)
    })
  }, [])


  return (
    <div className="DetaliPaje">
      <div className="mod">
        <img src={meal.image} />
        <h3>{meal.model}</h3>
      </div>
      <ul>
        <p>{meal.A}</p>
        <p>{meal.B}</p>
        <p>{meal.C}</p>
        <p>{meal.D}</p>
        <p>{meal.E}₽</p>
      </ul>
    </div>
  )
};

export default DetaliPaje;