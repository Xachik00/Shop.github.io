import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { getFilteredCategory } from "../../api";

import MealsList from "../../components/Meals/MealsList";

const CategoryPaje = () => {
  const [meals,setMeals]=useState([])
  const {name}=useParams();
  
 useEffect(()=>{
  getFilteredCategory(name).then(data=>{
    console.log(data);
    setMeals(data)
  })
 },[])
  return (
    <div className="CategoryPaje" >
      <MealsList meals={meals} name={name} />
    </div>
  )
}

export default CategoryPaje