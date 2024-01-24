import React, { useContext } from 'react'
import "./style.css"
import { CountContext } from '../../utils/countContext'
import { INCREMENT_COUNT } from '../../utils/countActions'
export default function Fifth() {
  const [state,dispatch] = useContext(CountContext)
  return (
    <div className='Fifth'>
      <h5>Fifth</h5>
      <button onClick={()=>dispatch({
        type:INCREMENT_COUNT
      })}>Add one</button>
    </div>
  )
}
