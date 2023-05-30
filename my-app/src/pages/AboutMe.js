import React from 'react'
import '../styles/style.css';
import { Container, Row, Col } from 'react-bootstrap'

export default function AboutMe() {
  return (
    <div className='aboutpagebackground'>
    <Container>
        <Row className='textbackground'>
            <Col md={7} >
            <h3 className='aboutmetext'>About Me</h3>
                <p className='aboutdetails'>
                
                    Experienced in Business Lending, Real Estate Investment Lending, Real Estate Acquisitions, Specializing in B2B Markets.
                    Currently intergrating AI/ML/DL with Web and Mobile App Development .
                    

                </p>
                <p className='aboutdetails'>
              
                    Open to collaborating on innovative projects.
                    Feel free to reach out to me on LinkedIn.

                </p>
                <ul className='skilllist'>
                    <Row>
                        <h3>Skills</h3>
                        <Col md={7}>
                            <li>HTML5/CSS3</li>
                            <li>JavaScript</li>
                            <li>SQL</li>
                            <li>C++</li>
                            <li>Python</li>
                            <li>Bootsrap 5</li>
                            <li>Redux Js</li>
                            <li>BASH</li>
                            <li>Git/Github</li>
                        </Col>
                        <Col md={5}>
                            <li>MongoDB</li>
                            <li>Express</li>
                            <li>React</li>
                            <li>Node</li>

                        
                        </Col>
                    </Row>
                </ul>
            </Col>
            <Col md={5}>
                <div className="webimage"></div>
            </Col>
        </Row>
    </Container>

</div>

);
}