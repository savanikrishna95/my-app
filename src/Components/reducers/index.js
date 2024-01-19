import { combineReducers } from 'redux';
const intialstate = 0;
const ChangetheNumber = (state = 0, action) => {
  console.log(state);
   switch(action.type){
      case 'INCREMENT':

      return state + 1;
      case 'DECREMENT':
       return state  - 1;
       default : 
       return state;
   }
   

  
};


const Changethetext = (state = "krishna", action) => {
    switch(action.type){
     
        case 'text':
         return action.text + "test";
        default:
          return state;
    }
    
   
 };

const rootReducer = combineReducers({
    ChangetheNumber,
    Changethetext
  })
export default rootReducer;
  