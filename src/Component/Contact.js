import React, { Component } from 'react'
import Roll from 'react-reveal/Roll';
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MaterialIcon from 'material-icons-react'


class Contact extends Component {


    render() {
        return (
            <Roll right>
                <div className='contact'>
                    <div className='contactContainer'>
                     
                            <Row className='contactContent'> 

                                <label>Get in touch!</label>
                                <p>Nice! It seems that you wanna talk to me,
                                    so can you tell me, what you think about my job, and this site?
                                    =D Thank's a million!
                                </p>

                                <form>

                                    <Row>
                                        <Col md={6} className='inputForm'><input type='text' placeholder='Name'></input></Col>
                                        <Col md={6} className='inputForm'><input type='email' placeholder='Email'></input></Col>
                                    </Row>

                                    
                                    <Col md={12} className='inputForm'>                                    
                                        <textarea placeholder='Leave your message...'></textarea>

                                        <button className='buttonForm' type='submit'>Send it Now</button>
                                    </Col>

                                </form>
                            </Row>
                            
                            <Row className='contactFooter'>
                            
                                <Col md={4}>
                                
                                    <label className='title'>Rebecca Souza</label>
                                    <p className='shortText'>
                                        This is a portfolio page, you can find more about
                                        my job following on github, or pinterest. Check it out!
                                        <br />
                                        <br /> @2018 - Made in React =p
                                    </p>
                                
                                </Col>
                                <Col md={4}>
                                
                                    <label className='title opt2'>Quick Menu</label>
                                
                                    <ul className='menuContact'> 
                                        <Link to='/'><li>Return Home</li></Link>
                                        <Link to='/about'><li>About me</li></Link>
                                        <Link to='/skill'><li>My Skills</li></Link>
                                        <Link to='/psafe'><li>meet PSafe</li></Link>
                                    </ul>
                                
                                </Col>
                                <Col md={4}></Col>
                            
                            </Row>

                    </div>
                </div>            
            </Roll>           
        )
    }
}

export default Contact