import { combineReducers } from 'redux';

const reducer = (state = {}, action) => {
    switch (action.type) {
      case 'YouTube':
          return action.payload
        
      default:
        return state;
    }
  };
  const fet = ( state = {} ,action) => {
      switch(action.type){
          case 'fetch':
          return action.payload
          default:
              return state
      }
  }

  
export default combineReducers({
  youtub: reducer,
  fetching : fet
});
