import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incByamt,inc,dec,getUserAccount,decByamt} from '../actions'

const Account = () => {


    const [value,setValue] = useState(10)
    const amount = useSelector(state=>state.account.amount)
    const dispatch = useDispatch()


  return (
    <div className='card'>
        <div className="container">
            <h4><b>App Component</b></h4>
            <h3>Amount: ${amount}</h3>
            <button onClick={()=>dispatch(inc())}>Increment +</button>
            {" "}
            <button onClick={()=>dispatch(dec())}>Decrement -</button>
            {" "}
            <input type="number" value={value}  onChange={(e)=>setValue(+e.target.value)} />
            {" "}
            <button onClick={()=>dispatch(incByamt(value))}>IncrementByValue {value }</button>
            {" "}
            <button onClick={()=>dispatch(decByamt(value))}>DecrementByvalue {value }</button>
            {" "}
            <button onClick={()=>dispatch(getUserAccount(2))}>Initialize Account </button>
        </div>
    </div>
  )
}

export default Account