import React from 'react'
import Header from '../Components/Header'
import NavBarMain from '../Components/NavBarMain'
import './Mainpage.css'
import Button from 'react-bootstrap/esm/Button'
import divbg1 from '../Assets/kideducation.jpg'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Carousel from 'react-bootstrap/Carousel';
import Footer from '../Components/Footer.js'
import ebooksicon from '../Assets/ebooksicon.png'
import lessonplanicon from '../Assets/lessonplanicon.png'
import testgeneratorsicon from '../Assets/testgeneratorsicon.png'
import videosicon from '../Assets/videosicon.png'
import worksheetsicon from '../Assets/worksheetsicon.png'
import answerkey from '../Assets/answerkeysicon.png'
import courses from '../Assets/courses.png'
import schools from '../Assets/schools.png'
import students from '../Assets/students.png'
import teachers from '../Assets/teachers.png'
import videos from '../Assets/videos.png'
import whitebg from '../Assets/whitebg.jpg'
import comma from '../Assets/comma.png'

function Mainpage() {
  return (
    <div>
      <Header />
      <NavBarMain />

      <div className='maindiv1 d-flex '>
        <div className='Bannertext'>
          <h1 className="text-light">PLAY AND LEARN HOW TO</h1>
          <h2 className="text-light">Create new things</h2>
          <Button variant="success">Read More</Button>
        </div>
      </div>

  

    

      <div className='maindiv2 justify-content-center'>
      
        <Container>
        <div className='d-flex justify-content-center' style={{fontFamily:'revert'}}>
          <h1>Resources</h1>
        </div>
          <Row>

            <Col >

              <Card style={{ width: '25rem', height:'13rem' , padding:'4' , margin: '4' }}>
                <Card.Body>
                  <Row>
                    <Col>
                    <Card.Img style={{height:'150px' , width:'150px'}} variant="top" src={ebooksicon} />
                    </Col>
                    <Col>  <Card.Title>E-Book</Card.Title>
                  <Card.Text style={{fontSize:'12px'}}>
                  An e-book is an electronic version of a traditional print 
                  book that can be read by using a personal computer or by 
                  using an e-book reader.
                  </Card.Text>
                    </Col>
                  </Row>
                
                
                </Card.Body>
              </Card>

            </Col>

            <Col>

              <Card style={{ width: '25rem' , height:'13rem' , padding:'4' , margin: '4' }}>
                
                <Card.Body>
                <Row>
                    <Col>
                    <Card.Img style={{height:'150px' , width:'150px'}} variant="top" src={testgeneratorsicon} />
                    </Col>
                    
                    <Col> 
                    <Card.Title>Test Generator</Card.Title>
                  <Card.Text style={{fontSize:'12px'}}>
                  If you wish to add questions from different chapters within
                   one main question. You can do followings (a) To add questions
                    from multiple chapters, (b) To add Fill-ups and True/False, 
                    (c) To add questions with sub-parts
                  </Card.Text>
                    </Col>
                  </Row>
                 
                </Card.Body>
              </Card>

            </Col>

            <Col>

              <Card style={{ width: '25rem' , height:'13rem' , padding:'4' , margin: '4' }}>
                
                <Card.Body>
                <Row>
                    <Col>
                          <Card.Img variant="top" style={{height:'150px' , width:'150px'}} src={videosicon} />
                    </Col>

                    <Col>
                    <Card.Title>Videos</Card.Title>
                  <Card.Text style={{fontSize:'12px'}}>
                  This benefit of using videos in an educational setting
                   is numerous. Their convenience and versatility make them 
                   an asset to students, teachers and educational institutions alike.
                  </Card.Text>
                    </Col>
                  </Row>
                  
                </Card.Body>
              </Card>

            </Col>

          </Row>

          <Row>

            <Col>

              <Card style={{ width: '25rem' ,height:'13rem', padding:'4' , margin: '4' }}>
                
                <Card.Body>
                <Row>
                    <Col>
                        <Card.Img style={{height:'150px' , width:'150px'}} variant="top" src={lessonplanicon}/>
                    </Col>

                    <Col>
                  <Card.Title>Lesson Plan</Card.Title>
                  <Card.Text style={{fontSize:'12px'}}>
                  A lesson plan is a step by step guide that 
                  provides a structure for an essential learning.
                  </Card.Text>
                    </Col>
                  </Row>
                 
                </Card.Body>
              </Card>

            </Col>

            <Col>

              <Card style={{ width: '25rem' , height:'13rem' , padding:'4' , margin: '4' }}>
                
                <Card.Body>
                <Row>
                    <Col>
                      <Card.Img style={{height:'150px' , width:'150px'}} variant="top" src={worksheetsicon} />
                    </Col>

                    <Col>
                  <Card.Title>Practice Worksheets</Card.Title>
                  <Card.Text style={{fontSize:'12px'}}>
                  Students can download these worksheets and practice 
                  them. This will help them to get better marks in
                   examination.
                  </Card.Text>
                    </Col>
                  </Row>
                  
                </Card.Body>
              </Card>

            </Col>

            <Col>

              <Card style={{ width: '25rem', height:'13rem' , padding:'4' , margin: '4' }}>
                
                <Card.Body>
                <Row>
                    <Col>
                     < Card.Img style={{height:'150px' , width:'150px'}} variant="top" src={answerkey} />
                    </Col>

                    <Col>
                    <Card.Title>Answer Key</Card.Title>
                  <Card.Text style={{fontSize:'12px'}}>
                  We spend time checking answers once students
                   have finished a class or homework exercise
                  </Card.Text>
                    </Col>
                  </Row>
                  
                </Card.Body>
              </Card>

            </Col>

          </Row>

        </Container>
      </div>

      <div className='maindiv3'>
      

        <div>
        <div className='d-flex justify-content-center' style={{fontFamily:'revert'}}>
          <h1 className='text-light'>Webinar</h1>
        </div>
          <Row>
            <Col className='lg-3'>
            <Card style={{ width: '20rem' , height:'20rem' }}>
      <Card.Body>
        <Card.Title>Teachers Parents Partnership for Interactive & Effective Online Education During Covid</Card.Title>
        <iframe width="280px" height="200px" 
        src="https://www.youtube.com/embed/5rXe8i4deBI?si=Txr2YnLUZwVCnrLj"
         title="YouTube video player" frameborder="0" allow="accelerometer; 
         autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
          </iframe>
      </Card.Body>
    </Card>
            </Col>

            <Col className='lg-3'>
            <Card style={{ width: '20rem' , height:'20rem'}}>
      <Card.Body>
        <Card.Title>21st Century Competencies | Mr Surya Narain Bahadur & Vinita Kher</Card.Title>
        <iframe width="280px" height="200px" 
        src="https://www.youtube.com/embed/hje-7SzFRY8?si=uellQC1V9wskI-tO" 
         title="YouTube video player" frameborder="0" allow="accelerometer; 
         autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
          </iframe>
      </Card.Body>
    </Card>
            </Col>

            <Col className='lg-3'>
            <Card style={{ width: '20rem' , height:'20rem'}}>
      <Card.Body>
        <Card.Title>Neuro-Linguistic Programming (Technology of Excellence for Children Empowerment)</Card.Title>
        <iframe width="280px" height="200px" 
        src="https://www.youtube.com/embed/z9KYBGxmguU?si=WWiPziXJkkeyqydo"  
         title="YouTube video player" frameborder="0" allow="accelerometer; 
         autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
          </iframe>
      </Card.Body>
    </Card>
            </Col>

            <Col className='lg-3'>
            <Card style={{ width: '20rem' , height:'20rem' }}>
      <Card.Body>
        <Card.Title>दक्षिण भारत में हिंदी शिक्षण (Challenges faced during Hindi Teaching in South India)</Card.Title>
        <iframe width="280px" height="200px" 
        src="https://www.youtube.com/embed/itDc3sYJ-eE?si=3grqjTnwbervYm6v"
         title="YouTube video player" frameborder="0" allow="accelerometer; 
         autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
          </iframe>
      </Card.Body>
    </Card>
            </Col>

          </Row>


        </div>
      </div>

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


    
    

      <div className='maindiv5'>
        <Container className=' justify-content-center'>
          <Row>
            <Col>

              <Card style={{ width: '10rem', backgroundColor: 'rgba(245, 245, 245, 0.1)', border: 0 }}>
                <Card.Img variant="top" src={students} />
                <Card.Body>
                  <Card.Title>STUDENTS</Card.Title>
                  <Card.Text>
                    2500+ Students Registered
                  </Card.Text>
                </Card.Body>
              </Card>

            </Col>

            <Col>

              <Card style={{ width: '10rem', backgroundColor: 'rgba(245, 245, 245, 0.1)', border: 0 }}>
                <Card.Img variant="top" src={teachers} />
                <Card.Body>
                  <Card.Title>TEACHERS</Card.Title>
                  <Card.Text>
                    500+ Teachers Registered
                  </Card.Text>
                </Card.Body>
              </Card>

            </Col>

            <Col>

              <Card style={{ width: '10rem', backgroundColor: 'rgba(245, 245, 245, 0.1)', border: 0 }}>
                <Card.Img variant="top" src={videos} />
                <Card.Body>
                  <Card.Title>VIDEOS</Card.Title>
                  <Card.Text>
                    2000+ Online Videos
                  </Card.Text>
                </Card.Body>
              </Card>

            </Col>

            <Col>

              <Card style={{ width: '10rem', backgroundColor: 'rgba(245, 245, 245, 0.1)', border: 0 }}>
                <Card.Img variant="top" src={courses} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    8000+ Live Courses
                  </Card.Text>
                </Card.Body>
              </Card>

            </Col>

            <Col>

              <Card style={{ width: '10rem', backgroundColor: 'rgba(245, 245, 245, 0.1)', border: 0 }}>
                <Card.Img variant="top" src={schools} />
                <Card.Body>
                  <Card.Title>SCHOOLS</Card.Title>
                  <Card.Text>
                    80+ Registered Schools
                  </Card.Text>
                </Card.Body>
              </Card>

            </Col>
          </Row>
        </Container>
      </div>

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
  
  <Footer/>
    </div>
  )
}

export default Mainpage