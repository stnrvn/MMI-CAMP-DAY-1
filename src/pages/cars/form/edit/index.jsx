import React, {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import {
  fetchCarById,
  updateCars
} from '../../../../store/actions/carAction'
import {
  useDispatch,
  useSelector
} from 'react-redux'

const CarsFormEdit = () => {
  const dispatch = useDispatch()

  const history = useHistory()
  const { id } = useParams()

  const { carById } = useSelector(state => state.carReducer)


  useEffect(() => {
    dispatch(fetchCarById(id))
    setName(carById.name)
    setType(carById.type)
    setYear(carById.year)
    setBrand(carById.year)
  },[])

  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [year, setYear] = useState(null)
  const [brand, setBrand] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    
    const payload ={
      name,
      type,
      year,
      brand
    }

    dispatch(updateCars(id, payload))
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <label for="fname">Car name:</label><br/>
        <input defaultValue={carById.name} onChange={(e) => setName(e.target.value)} type="text" id="fname" name="fname"/><br/>
        <label for="lname">Type:</label><br/>
        <input defaultValue={carById.type} onChange={(e) => setType(e.target.value)} type="text" id="lname" name="lname"/><br/>
        <label for="lname">Year:</label><br/>
        <input defaultValue={carById.year} onChange={(e) => setYear(e.target.value)} type="number" id="lname" name="lname"/><br/>
        <label for="lname">Brand:</label><br/>
        <input defaultValue={carById.brand} onChange={(e) => setBrand(e.target.value)} type="text" id="lname" name="lname"/><br/>
        <button type="submit" >submit</button>
      </form>
    </>
  )
}

export default CarsFormEdit