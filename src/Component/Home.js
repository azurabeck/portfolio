import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faPinterest, faLinkedin } from '@fortawesome/free-brands-svg-icons';

class Home extends Component {



    render() {
        return (
            <div id='home'>      

                <div className="welcome-image-area">
                    <div className="display-table">
                        <div className="display-table-cell">

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
                    <div className="arrowSliding">
                        <div className="arrow"></div>
                    </div>
                    <div className="arrowSliding delay1">
                        <div className="arrow"></div>
                    </div>
                    <div className="arrowSliding delay2">
                        <div className="arrow"></div>
                    </div>
                </div>
     

            </div>
        )
    }
}

export default Home