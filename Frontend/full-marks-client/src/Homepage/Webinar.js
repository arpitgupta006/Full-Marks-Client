import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container'

function Webinar() {
  return (
    <div>
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
    </div>
  )
}

export default Webinar