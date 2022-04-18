import { useEffect, useState } from "react"
import {
  useDispatch,
  useSelector
} from 'react-redux'
import {
  fetchCars,
  addCars,
  fetchCarById,
  updateCars,
  deleteCars
} from '../../store/actions/carAction'
import MyTable from '../../components/table'

const Cars = () => {
  const { cars } = useSelector(state => state.carReducer)
  const dispatch = useDispatch()
  const [columns, setColumns] = useState([
    'Id',
    'Car Name',
    'Type',
    'Year',
    'Brand',
    'Created_at',
    'Updated_at',
    'Aksi'
  ])

  const handleUpdate = (id) => {
    dispatch(updateCars(id))
  }

  const handleDelete = (id) => {
    dispatch(deleteCars(id))
  }

  useEffect(() => {
    dispatch(fetchCars())
  },[])

  return(
    <>
      <MyTable
        columns={columns}
        datas={cars}
        onDelete={handleDelete}
      />
    </>
  )
}

export default Cars