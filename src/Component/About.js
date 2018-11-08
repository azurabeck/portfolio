import React, { Component } from 'react'
import Roll from 'react-reveal/Roll';

class About extends Component {


    render() {
        return (
            <Roll left>
                <div className='about'>
                    <div className='aboutContainer'>
                        <label>About</label>
                    </div>
                </div>
            </Roll>
        )
    }
}

export default About