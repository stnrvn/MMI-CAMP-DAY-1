import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

// components
import MyButton from './components/button';
import MyTable from './components/table';

function App() {
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

  useEffect(() => {
    // ini menjalankan suatu function saat web belum benar2 muncul
    // cth: get data from api
    // willount
    console.log('use effect run')

  }, [data])

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <MyTable
              columns={columns}
              datas={data}
              onDelete={handleDelete}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
