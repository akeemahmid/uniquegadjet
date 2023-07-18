import React, { useState } from 'react'
import { ProductState } from "../ContextPage/Context";
import Buttons from './Buttons'
import Menuitems from './Menuitems'



const Categories = () => {
    const {state:{categorie}} = ProductState()
    const [catego, setCatego] = useState(categorie)
    console.log(catego);
    const [filter, setFilter] = useState([])

    const clicked = (name) =>{
        const newselect = categorie.map((categ)=> categ.map === name)
        setCatego(newselect)
    }
  return (
    <div>
        <h1>hello can you see this</h1>
        // <Buttons clicked={clicked}/>
        <Menuitems catego={catego}/>
    </div>
  )
}

export default Categories