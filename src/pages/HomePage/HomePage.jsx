import { useState,useEffect } from "react";
import { getAllCategiries } from "../../api";

import CategotyList from "../../components/Category/CategotyList";

const HomePage = () => {
  const [categories,setCategories]=useState([]);

  useEffect(()=>{
    getAllCategiries().then(data=>{
      setCategories(data.goods)
      console.log(data.goods);
    })
  },[])



  return (
    <div>
      <CategotyList categories={categories} />
    </div>
  )
}

export default HomePage