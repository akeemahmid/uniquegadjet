import React, { useContext, useReducer } from 'react'
import { createContext } from 'react'
import {confidence, products, headerArray, secondArray, featuresArray, beyond, categorie, footera, footerb, footerc, footerd, questions} from '../../ArrayData/Items'
import {Contextreducer} from './Contextreducer'
const Datas = createContext()



const Context = ({children}) => {
  const [state, dispatch] = useReducer(Contextreducer, {
    products: products,
    headerArray: headerArray,
    secondArray: secondArray,
    featuresArray: featuresArray,
    categorie: categorie,
    beyond: beyond,
    confidence: confidence,
    footera:footera,
    footerb:footerb,
    footerc:footerc,
    footerd:footerd,
    questions:questions,
    cart:[]
  })

  return (
    <Datas.Provider value={{state, dispatch}}>
        {children}
    </Datas.Provider>
  )
}


export const ProductState =(()=>{
    return useContext(Datas)
})
export default Context