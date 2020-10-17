import React, { Component } from 'react'
import ProfileBreif from './ProfileBreif';
import Portfolio from './Portfolio';
import Review from './Review';
import Education from './Education';
import Experience from './Experience';

class ProfileMain extends Component {
    render() {
        return (
            <>
                <div className="col-sm-10 col-md-9">
                    <ProfileBreif></ProfileBreif>
                    <Portfolio></Portfolio>
                    <Education></Education>
                    <Experience></Experience> 
                    <Review></Review>     
                </div>  
            </>
        )
    }
}

export default ProfileMain
