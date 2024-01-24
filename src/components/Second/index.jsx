import React, { useContext } from 'react'
import "./style.css"
import Third from '../Third'
import { CountContext } from '../../utils/countContext'
import { DOUBLE_COUNT } from '../../utils/countActions';
export default function Second() {
  const [{count},dispatch]=useContext(CountContext);
  return (
    <div className='Second'>
      <h2>Second count:{count}</h2>
      <button onClick={()=>{
        dispatch({type:DOUBLE_COUNT})
      }}>double</button>
      <Third/>
      </div>
  )
}
