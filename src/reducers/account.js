
import { getAccountUserFulFilled,getAccountUserPending ,decrementByAmount,getAccountUserRejected,increment,decrement,incrementByAmount } from "../actions"



export function amountReducer(state={amount:1},  action)

{
  switch(action.type)
  {
    case increment:
      return {amount:state.amount+1}


    case decrement:
      return {amount:state.amount-1}  


    case incrementByAmount:
      return {amount:state.amount+ action.payload}

    case decrementByAmount:
        if(state.amount>action.payload)
        return {amount:(state.amount - action.payload)} 
    else return {...state,message:"value nigative ho rhi hai"}


    case getAccountUserFulFilled:
        return {amount:action.payload, pending:false}
    
    case getAccountUserPending:
      return {...state, pending:true }
          
    case getAccountUserRejected:
            return {...state , error:action.error ,pending:false}     

    default:
      return state;
  }
}