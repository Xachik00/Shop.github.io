import CategoryItem from "./CategoryItem";
import './Category.css'


const CategotyList = ({categories}) => {
  return (
    <div className='CategotyList' >
      <h1>ՄԵՔԵՆԱՆԵՐԸ ԸՍՏ ԽՄԲԵՐԻ </h1>
        {
            categories.map(item=><CategoryItem
                key={item.id}
                {...item}
            />)
        }
    </div>
  )
}

export default CategotyList