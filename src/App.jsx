import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Account from './component/Account'
import Bonus from './component/Bonus'
import { useSelector } from 'react-redux'

function App() {


const amount = useSelector(state=>state.account.amount)
const account = useSelector(state=>state.account)

const points = useSelector(state=>state.bonus.points)


  return (
    <div className='App'>

      {
account.pending?<p>Loading...</p>: account.error?<p>{account.error}</p>:  <h2>Current Amount: {amount} </h2>
      }
      <h4>App</h4>
     
      <h3>Total Points:  {points } </h3>
      <Account  />
      <Bonus  />
      
    </div>
  )

}

export default App
