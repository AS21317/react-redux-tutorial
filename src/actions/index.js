import axios from "axios"


//* Make action name  constant not string to avoid typo 
// const init = 'init'
export const increment ='account/increment'
export const decrement ='account/decrement'
export const incrementByAmount ='account/incrementByAmount'
export const decrementByAmount ='account/decrementByAmount'
export const getAccountUserPending = 'account/pending'
export const getAccountUserFulFilled = 'account/fulfilled'
export const getAccountUserRejected = 'account/rejected'


// for bonus 

export const incBonus = 'bonus/incBonus'




// Action creators 

export function getUserAccount(id)
{
  return async (dispatch,getState)=>{
   try{
    dispatch(userAccountPending())
    const {data} = await axios.get(`http://localhost:8080/accounts/${id}`);

    dispatch (userAccountFullfilled(data.amount));
   } catch(error)
   {
    dispatch (userAccountRejected(error.message));

   }
  }
  
}

export function userAccountFullfilled(value)
{
  return {type: getAccountUserFulFilled , payload:value}
}

export function userAccountRejected(error)
{
  return {type: getAccountUserRejected , error:error}

}

export function userAccountPending()
{
  return {type: getAccountUserPending }

}



export function inc()
{
  return {type:increment}
}


export function dec()
{
  return {type:decrement}
}


export function incByamt(amount)
{
  return {type:incrementByAmount , payload:amount}
}


export function decByamt(amount)
{
  return {type:decrementByAmount , payload:amount} 
}

// Action creaters for bonus 
 export function incUserBonus()
 {
  return {type:incBonus}
 }