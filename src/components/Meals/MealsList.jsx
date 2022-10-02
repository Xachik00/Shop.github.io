import MealsItem from "./MealsItem"
import './meals.css';

const MealsList = ({meals,name}) => {
  return (
    <div className="MealsList" >
      <h1>{name} ՄՈԴԵԼՆԵՐ</h1>
      {
        meals.map(item=><MealsItem
            key={item.id}
            {...item}
            name={name}
        />)
    }</div>
  )
}

export default MealsList