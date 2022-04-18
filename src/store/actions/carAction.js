import axios from 'axios'

export const fetchCars = () => {
  return async (dispatch) => {
    try {
      const response = await axios({
        url: 'http://localhost:4000/car',
        method: 'GET'
      })

      dispatch({
        type: 'FETCH_CARS',
        payload: response.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const addCars = (payload) => {
  return async(dispatch) => {
    try {
      const responseAdd = await axios({
        url: 'http://localhost:4000/car',
        method: 'POST',
        data: payload
      })

      if(responseAdd.status === 201){
        const response = await axios({
          url: 'http://localhost:4000/car',
          method: 'GET'
        })

        dispatch({
          type: 'FETCH_CARS',
          payload: response.data
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const fetchCarById = (id) => {
  return async(dispatch) => {
    try {
      const response = await axios({
        url: `http://localhost:4000/car/${id}`,
        method: 'GET'
      })

      dispatch({
        type: 'FETCH_CARS_BY_ID',
        payload: response.data[0]
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const updateCars = (id, payload) => {
  return async(dispatch) => {
    try {
      const responseAdd = await axios({
        url: `http://localhost:4000/car/${id}`,
        method: 'PUT',
        data: payload
      })

      if(responseAdd.status === 201){
        const response = await axios({
          url: 'http://localhost:4000/car',
          method: 'GET'
        })

        dispatch({
          type: 'FETCH_CARS',
          payload: response.data
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const deleteCars = (id) => {
  return async(dispatch) => {
    try {
      const responseDelete = await axios({
        url: `http://localhost:4000/car/${id}`,
        method: 'DELETE'
      })

      if(responseDelete.status === 200){
        const response = await axios({
          url: 'http://localhost:4000/car',
          method: 'GET'
        })

        dispatch({
          type: 'FETCH_CARS',
          payload: response.data
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}