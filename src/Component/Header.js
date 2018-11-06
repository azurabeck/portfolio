import React, {Component} from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faPinterest, faLinkedin } from '@fortawesome/free-brands-svg-icons';

class Header extends Component {
    render() {
        return (
            <header id='home' className="header">
      
                <div className='header-top-area'>
                
                    <Grid>
                    
                        <Row>
                            <Col md={3}>

                                
                                <div className='nav'>
                                    <div className="logo">
                                        <a href="index.html">Becca<span className='red'>Souza</span></a>
                                    </div>

                                    <button type="button" id='toggle' className='toggle' 
                                            data-toggle="collapse" data-target=".navbar-collapse">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                    </button>
                                </div>
                            </Col>
                            <Col md={9}>
                            
                                   
                                    <section className="menu">
                                        <ul>
                                            <li><a href="#" className="active">Home</a></li>
                                            <li><a href="#">About</a></li>
                                            <li><a href="#">Skills</a></li>
                                            <li><a href="#">Contact</a></li>
                                        </ul>
                                    </section>
                                

                            </Col>                           
                        </Row>

                    </Grid>

                </div>

                <div class="welcome-image-area">
                    <div class="display-table">
                        <div class="display-table-cell">

                            <label className='titleHome'>
                              <span className='work'>WORK</span><br />                                
                              <span className='be'> BE</span>       
                              <span className='to'> TO</span>  <br />  
                              <span className='different'> DI<span className='f'>F</span>FERENT</span>                    
                            </label>                   
                                                     
                            <ul className='socialLink'>
                                <li><FontAwesomeIcon icon={faGithub} /></li>
                                <li><FontAwesomeIcon icon={faPinterest} /></li>
                                <li><FontAwesomeIcon icon={faLinkedin} /></li>
                            </ul>     
                        </div>
                    </div>
                </div>


                <div className='header-footer-area'>
                    <div class="arrowSliding">
                        <div class="arrow"></div>
                    </div>
                    <div class="arrowSliding delay1">
                        <div class="arrow"></div>
                    </div>
                    <div class="arrowSliding delay2">
                        <div class="arrow"></div>
                    </div>
                </div>
           

            </header>
        )
    }
}

export default Header