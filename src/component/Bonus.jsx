import React, { useState } from 'react'
import { incUserBonus } from '../actions'
import { useDispatch, useSelector } from 'react-redux'

const Bonus = () => {
    const points = useSelector(state=>state.bonus.points)
    const amount = useSelector(state=>state.account.amount)
    const dispatch = useDispatch()


   
  return (
    <div className='card'>
        <div className="container">
            <h4><b>Bonus Component</b></h4>
            <h3>Total Points : {points}</h3>
            <h3>Total Amount : {amount}</h3>
            <button onClick={()=>dispatch(incUserBonus())}>Increment</button>
        </div>
    </div>
  )
}

export default Bonus