import { Link } from "react-router-dom";
import './Category.css'

const CategoryItem = ({id,firma,image}) => {
  return (
    <div className='CategoryItem' >
        <h3>{id}</h3>
        <img src={image} />
        <h3>{firma}</h3>
        <Link to={'/category/'+firma}> Show {firma}...</Link>
    </div>
  )
}

export default CategoryItem;