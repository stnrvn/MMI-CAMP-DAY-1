import { useState } from 'react'
import {
  addCars
} from '../../../../store/actions/carAction'
import {
  useDispatch
} from 'react-redux'

const CarsFormAdd = () => {
  const dispatch = useDispatch()

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

    dispatch(addCars(payload))
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <label for="fname">Car name:</label><br/>
        <input onChange={(e) => setName(e.target.value)} type="text" id="fname" name="fname"/><br/>
        <label for="lname">Type:</label><br/>
        <input onChange={(e) => setType(e.target.value)} type="text" id="lname" name="lname"/><br/>
        <label for="lname">Year:</label><br/>
        <input onChange={(e) => setYear(e.target.value)} type="number" id="lname" name="lname"/><br/>
        <label for="lname">Brand:</label><br/>
        <input onChange={(e) => setBrand(e.target.value)} type="text" id="lname" name="lname"/><br/>
        <button type="submit" >submit</button>
      </form>
    </>
  )
}

export default CarsFormAdd