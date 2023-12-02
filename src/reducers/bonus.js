import { incBonus, incByamt } from "../actions"


export function bonusReducer(state={points:10},  action)
{
  switch(action.type)
  {
    case incBonus:
      return {points : state.points+1}
    
    case incByamt : 
    if(action.payload >=100)
    return {points:state.points+1}

    default:
    return state  
  }
}