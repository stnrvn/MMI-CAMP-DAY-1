const initialState  = {
    usersBiodata: []
  }
  
  const carReducer = (state = initialState, action) => {
    switch(action.type){
      case 'FETCH_BIODATA':
        return {
          ...state,
          usersBiodata: action.payload
        }
      default:
        return state
    }
  }
  
  export default carReducer