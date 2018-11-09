import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import Download from '../Downloads/cv.pdf'

class About extends Component {

    render() {
        return (
            <Fade left>
                <div className='about'>
                    <div className='aboutContainer'>
                        <Row className='aboutHeader'>
                            <Col md={4}  className='aboutHeaderTitle'>
                            
                                <label id='this'>This</label><br />
                                <label id='isAbout'><span id='is'>is</span> <span id='about'>about</span></label><br />
                                <label id='me'>me!</label>

                            </Col>
                            <Col md={4}>                            
                                <label className='experience'>7 <span id='years'>years</span></label>    
                            </Col>
                            <Col md={4} className='aboutHeaderTitleRight'>
                                <ul>
                                    <Link to='/skills'>
                                        <li className='buttonSkills'>
                                            <label className='buttonText'>skills</label>
                                        </li>
                                    </Link>
                                    <Link to='/contact'>
                                        <li className='buttonContact'>
                                            <label className='buttonText'>contact</label>
                                        </li>
                                    </Link>
                                    <Link to='/home'>
                                        <li className='buttonHome'>
                                            <label className='buttonText'>close</label>
                                        </li>
                                    </Link>
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4} className='aboutPhoto'></Col>
                            <Col md={8} className='aboutText'>
                                
                                <label>I'm Rebecca.</label>

                                <p>
                                In the first semester of my Computer Science graduation, I started my career as a Q.A. in a company called PSafe. 
                                But at the end of the first semester I decided to switch to Design. This did not stop me from continuing in the Q.A team
                                and only 1 year later I got a promotion untill finally reached the Senior level. After that, I decided that I would like to
                                invest in a new area of ​​knowledge, so I asked for the opportunity to move to the frontend development area, that way I could 
                                improve my skills as developer and designer. My bosses liked the idea, and shortly I started to help in the development of one 
                                of our android apps called "PowerPro". Only a few months after that, our team was transferred to the backend part of the company
                                building tools to insert data in our system, from this point I started working with frontend react and redux. This is a summary of everything 
                                I've been doing so far. I'm still writing my final paper and I'm planning to start Computer Science abroad. I enjoy studying 
                                and new challenges, so I'm looking forward to finding this new stage of my life. In the meantime, I keep studying hard and taking classes 
                                at Udacity and Udemy for improving my skills.    <br /><br />

                                In those links bellow, you can download my CV, or find a little about the company I've been working for 7 years.  Thanks and take care!       
                                </p>


                                <Row className='buttons'>
                                    <Col md={6}><a href={Download} download className='buttonCV'>CV</a></Col>
                                    <Col md={6}><a href='http://www.psafe.com' className='buttonPSafe'>PSafe</a></Col>
                                </Row>                  
                            </Col>
                        </Row>
                    </div>
                </div>
            </Fade>
        )
    }
}

export default About