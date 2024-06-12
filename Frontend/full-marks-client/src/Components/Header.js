import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const Header =()=> {
    return (
        <div>
            <Container>
                <Row>
                    <Col className='d-flex' lg="3">
                        <i class="fa-solid fa-phone fa-2x"></i>
                        <p>  011-43776625</p>
                    </Col>

                    <Col className='d-flex' lg="3">
                        <i class="fa-solid fa-envelope fa-2x" ></i>
                        <p>  info@fmpl.in</p>
                    </Col>

                    <Col className='d-flex' lg="3">
                    <i class="fa-solid fa-location-dot fa-2x"></i>
                        <p>  4594A/9, Drayaganj New Delhi- 110002</p>
                    </Col>

                    <Col className='' lg="3">
                        <Dropdown>
                            <Dropdown.Toggle variant="warning" id="dropdown-basic">
                                Login/Register
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Login/Register as Student</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Login/Register as Teacher</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Login/Register as School</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header