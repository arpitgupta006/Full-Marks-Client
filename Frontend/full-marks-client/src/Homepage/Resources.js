import React from 'react'
import '../Resources.css'
import ebooksicon from '../Assets/ebooksicon.png'
import lessonplanicon from '../Assets/lessonplanicon.png'
import testgeneratorsicon from '../Assets/testgeneratorsicon.png'
import videosicon from '../Assets/videosicon.png'
import worksheetsicon from '../Assets/worksheetsicon.png'
import answerkey from '../Assets/answerkeysicon.png'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'

function Resources() {
  return (
    <div>
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
    </div>
  )
}

export default Resources