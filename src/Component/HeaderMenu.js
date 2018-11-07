import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {Grid, Row, Col} from 'react-bootstrap'

class Header extends Component {



    render() {
        return (
      
            <header className='header-top-area'>
            
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
                                        <li><Link to='/' className="active">Home</Link></li>
                                        <li><Link to='/about'>About</Link></li>
                                        <li><Link to='/skills'>Skills</Link></li>
                                        <li><Link to='/contact'>Contact</Link></li>
                                    </ul>
                                </section>
                            

                        </Col>                           
                    </Row>

                </Grid>

            </header>
            
        )
    }
}

export default Header