import React, { Component } from 'react'
import Fade from 'react-reveal/Flip';


class Skills extends Component {

    render() {
        return (
            <Fade top>
                <div className='skills'>
                    <div className='skillsContainer'>
                        <label>Skills</label>
                    </div>
                </div>
            </Fade>            
        )
    }
}

export default Skills