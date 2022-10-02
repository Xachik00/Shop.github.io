import { Link } from "react-router-dom";
import './meals.css';

const MealsItem = ({id,model,image,name}) => {
  return (
    <div className='MealsItem' >
        <h3>{id}</h3>
        <img src={image} />
        <h3>{model}</h3>
        <Link to={'/'+name+'/'+id}>{model}...</Link>
    </div>
  )
}

export default MealsItem;