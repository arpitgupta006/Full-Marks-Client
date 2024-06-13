import React from 'react'
import comma from '../Assets/comma.png'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Carousel from 'react-bootstrap/Carousel';

function Reviews() {
  return (
    <div>
         <div className='maindiv6'>

<div style={{ display: 'block', width: 200, padding: 10 }}>
  <Carousel>
    <Carousel.Item interval={1500}>
      <img id='img1'
        className="d-block w-100"
        src={comma}
        alt="Image Two"
      />
      
      <h5 className='d-flex justify-content-center text-light'>John</h5>
      <h6 className='d-flex justify-content-center text-light'>Full Marks ltd</h6>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
        className="d-block w-100"
        src={comma}
        alt="Image Two"
      />
      <h5 className='d-flex justify-content-center text-light'>Mike</h5>
      <h6 className='d-flex justify-content-center text-light'>Delhi public school</h6>
    </Carousel.Item>
  </Carousel>
</div>
</div>
    </div>
  )
}

export default Reviews