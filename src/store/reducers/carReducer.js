const initialState  = {
  cars: [],
  carById: {}
}

const carReducer = (state = initialState, action) => {
  switch(action.type){
    case 'FETCH_CARS':
      return {
        ...state,
        cars: action.payload
      }
    case 'FETCH_CARS_BY_ID':
      return {
        ...state,
        carById: action.payload
      }
    default:
      return state
  }
}

export default carReducer