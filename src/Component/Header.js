import React, {Component} from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

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
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="header-text text-center">
                                        <h1 class="typewrite">I am Developer</h1>         
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </header>
        )
    }
}

export default Header