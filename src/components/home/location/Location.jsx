import React from 'react';
import "./location.css";
import { location } from "../../data/data"; // Ensure the correct path to your data file

const Location = () => {
  return (
    <>
      <section className="location padding">
        <div className="container">
          <h2>Bank Account Details</h2>
          <div className='content grid3 mtop'>
            {location.map((item, index) => (
              <div className='box' key={index}>
            
                <div className='overlay'>
                  <h5>{item.name}</h5>
                  <p>
                    <label>{item.Villas}</label> <br></br>
                    <label>{item.Apartments}</label>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Location