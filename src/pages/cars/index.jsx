import { useEffect } from "react"
import {
  useDispatch,
  useSelector
} from 'react-redux'
import {
  fetchCars
} from '../../store/actions/carAction'

const Cars = () => {
  const { cars } = useSelector(state => state.carReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCars())
  },[])

  return(
    <>
      <p>cars page {JSON.stringify(cars)}</p>
    </>
  )
}

export default Cars