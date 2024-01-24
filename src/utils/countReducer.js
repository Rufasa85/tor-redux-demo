import { DECREMENT_COUNT, DOUBLE_COUNT, INCREMENT_COUNT, RESET_COUNT } from "./countActions";

//state = {count:0}
const countReducer = (state,action)=>{
    switch (action.type) {
        case INCREMENT_COUNT:
              return {
                ...state,
                count:state.count+1
              } 
        case DECREMENT_COUNT:
        return {
            ...state,
            count:state.count-1
          } 
        case DOUBLE_COUNT:
        return {
            ...state,
            count:state.count*2
          } 
        case RESET_COUNT:
        return {
            ...state,
            count:0
          } 
        default:
          return {
            ...state
          }
    }
}

export default countReducer