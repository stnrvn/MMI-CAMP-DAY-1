import React, { useState, useEffect } from 'react';
import axios from 'axios';
// components
// import MyButton from '../../components/button';
// import MyTable from '../../components/table';

const Home = () => {
  const [counter, setCounter] = useState(0)

  const [buttonName, setButtonName] = useState('button dari state')

  const [data, setData] = useState([
    {
      id: 1,
      car: 'BMW',
      type: 'Sport',
      year: 1997
    },
    {
      id: 2,
      car: 'Mercy',
      type: 'E',
      year: 1997
    },
  ])

  const [columns, setColumns] = useState([
    'Id',
    'Car',
    'Type',
    'Year',
    'Aksi'
  ])

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id))
    console.log(id)
  }

  // const handleCounter = (num) => {
  //   setCounter(counter + num)
  // }


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const payload = {
      email,
      password
    }

    if(password === ''){
      alert('password tidak boleh kosong')
    } else if(email === ''){
      alert('email tidak boleh kosong')
    } else {
      console.log(payload, 'data submit')
    }

  }

  const [weatherData, setWeatherData] = useState([])
  const getWeatherData = async() => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=-6.200000&lon=106.816666&appid=80ab32cb35d451b42d8b6a1de0528383`)
    const responseJson = await response.json()

    setWeatherData(responseJson)

    console.log(responseJson, 'data weather')
  }

  useEffect(() => {
    getWeatherData()
  }, [])

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            {/* <MyTable
              columns={columns}
              datas={data}
              onDelete={handleDelete}
            /> */}

            {/* kalau di form nya ada onSubmit, berarti itu akan otomatis mengarah ke button type="submit" */}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                {/* <p>{email}</p> buat test */}
                <input
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                {/* <p>{password}</p> buat test*/}
                <input
                  type="password"
                  className="form-control"
                  placeholder="*****"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" >submit</button>
            </form>

          </div>
        </div>
      </div>
      

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div class="card">
              <div class="card-body">
                <p>Weather: {weatherData.weather[0].description}</p>
                <p>Wind Speed: {weatherData.wind.speed}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
