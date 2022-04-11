import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

// components
import MyButton from './components/button';

function App() {
  const [counter, setCounter] = useState(0)

  const [buttonName, setButtonName] = useState('button dari state')

  const [data, setData] = useState([
    {
      name: 'surya',
      age: 21
    },
    {
      name: 'bima',
      age: 25
    },
  ])

  const handleDelete = () => {
    data.filter()
  }

  const handleCounter = (num) => {
    setCounter(counter + num)
  }

  // useEffect(() => {
  //   console.log('use effect run');
  // },[])

  useEffect(() => {
    // ini menjalankan suatu function saat web belum benar2 muncul
    // cth: get data from api
    // willount
    console.log('use effect run')

  }, [counter])

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       {counter} click!
    //     </p>
    //     {/* <button onClick={() => handleCounter(5)}>click me!</button> */}
    //     <button type="button" className="btn btn-primary">Primary</button>
    //     {/* <MyButton 
    //       buttonName={buttonName}
    //     /> */}
    //   </header>
    // </div>
    <div className="container">
      <div className="row">

        <div className="col-lg-4">
          <div class="card">
            <div class="card-body">
              This is some text within a card body.
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div class="card">
            <div class="card-body">
              This is some text within a card body.
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div class="card">
            <div class="card-body">
              This is some text within a card body.
            </div>
          </div>
        </div>
        
      </div>

      <div className="row">
        <div className="col-lg-12">
          {
            data.map(item => {
              return(
                <>
                  <p>{item.name}</p>
                  <p>{item.age}</p>
                </>
              )
            })
          }
        </div>
      </div>

        {/* INI TABLE DIBAWAH CUMAN CONTOH PENULISAN*/}
      {/* <MyTable data={data} onDelete={handleDelete}/> */}
    </div>
  );
}

export default App;
