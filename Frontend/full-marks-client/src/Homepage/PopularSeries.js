import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Carousel from 'react-bootstrap/Carousel';
import whitebg from '../Assets/darkbluebg.jpg';

function PopularSeries() {
  return (
    <div>
        <div className='maindiv4'>
      

      <div id="carouselExample" className="carousel slide">
      <div className='d-flex justify-content-center' style={{fontFamily:'revert'}}>
          <h1 className='text-light'>Our Popular Series</h1>
      </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className='row'>
                           
                                    <div className='col-lg-4 col-md-6 col-sm-12'>                               
                                        <div className="card" >
                                            <img src={whitebg} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Book 1</h5>                                                                                                     
                                            </div>
                                        </div>                                             
                                      </div>

                                      <div className='col-lg-4 col-md-6 col-sm-12'>                               
                                        <div className="card" >
                                            <img src={whitebg} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Book 1</h5>                                                                                                    
                                            </div> 
                                        </div>                                             
                                      </div>

                                      <div className='col-lg-4 col-md-6 col-sm-12'>                               
                                        <div className="card" >
                                            <img src={whitebg} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Book 1</h5>                                                                                                     
                                            </div>
                                        </div>                                             
                                      </div>                                                               
                        </div>
                        
                    </div>

                    <div className="carousel-item">
                        <div className='row'>
                           
                                    <div className='col-lg-4 col-md-6 col-sm-12'>                               
                                        <div className="card" >
                                            <img src={whitebg} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Book 1</h5>                                                                                                    
                                            </div>
                                        </div>                                             
                                      </div>

                                      <div className='col-lg-4 col-md-6 col-sm-12'>                               
                                        <div className="card" >
                                            <img src={whitebg} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Book 1</h5>                                                                                                    
                                            </div>
                                        </div>                                             
                                      </div>

                                      <div className='col-lg-4 col-md-6 col-sm-12'>                               
                                        <div className="card" >
                                            <img src={whitebg} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Book 1</h5>                                                                                                   
                                            </div> 
                                        </div>                                             
                                      </div>                                                               
                        </div>
                        
                    </div>
                </div>
                <button className="carousel-control-prev text-dark" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>
      </div>
    </div>
  )
}

export default PopularSeries