// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react'
import 'react-bootstrap'
import { } from 'react-bootstrap';
import 'bootstrap'

function App() {

  let [val, setval] = useState([])

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')

      .then(function (response) {
        // handle success
        console.log(response.data.results);
        setval(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])

  return (
    <>
      <div className="row">
        {
          val.map((item, ind) => {
            return (
              <>
                <div className="col-6 ">
                  <div className="card  mb-3" >
                    <div className="row bg g-0">
                      <div className="col-md-4">
                        <img src={item.image} alt="" className='img-fluid h-100' ></img>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h2 classNameName='nam'><span className='text'>{item.name}</span></h2>
                          <p className="card-text"><span className='text1'><li className='leelo'>{item.status}-{item.species}</li></span></p>
                          <p className="card-text"><small className="text-body-secondary"> {item.type} </small></p>
                          <small className="text-body-secondary"> <span className='toxt'> Last Know Location : </span><br /> </small>
                          <h6> <span className='text'>{item.origin.name}</span> </h6>
                          <small className="text-body-secondary"> <span className='toxt'> First Seen in : </span> <br /> </small>
                          <h6 className='text'> {item.location.name} </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <h2 className='nam'>{item.name}</h2> <br />
                  <h5>{item.status}</h5> 
                  <h5>-{item.species}</h5> */}

              </>
            )
          })
        }
      </div>
    </>
  );
}

export default App;
