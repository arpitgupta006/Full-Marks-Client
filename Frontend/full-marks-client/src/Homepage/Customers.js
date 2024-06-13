import React from 'react'
import courses from '../Assets/courses.png'
import schools from '../Assets/schools.png'
import students from '../Assets/students.png'
import teachers from '../Assets/teachers.png'
import videos from '../Assets/videos.png'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'

function Customers() {
  return (
    <div>
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
    </div>
  )
}

export default Customers