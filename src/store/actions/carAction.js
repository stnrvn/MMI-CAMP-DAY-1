import axios from 'axios'

export const fetchCars = () => {
  return async (dispatch) => {
    try {
      const response = await axios({
        url: 'http://localhost:4000/car',
        method: 'GET'
      })

      // console.log(response.data, 'response get cars from action')

      dispatch({
        type: 'FETCH_CARS',
        payload: response.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}