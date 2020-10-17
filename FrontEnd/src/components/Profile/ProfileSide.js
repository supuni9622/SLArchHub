import React, { Component } from 'react'
import Skills from './Skills';
import Awards from './Awards';
import Services from './Services';
import Organizations from './Organizations';

class ProfileSide extends Component {
    render() {
        return (
            <>
                <div className="col-sm-2 col-md-3 mb-4" id="profile_other">
                    <Skills></Skills>
                    <Awards></Awards>
                    <Services></Services>
                    <Organizations></Organizations>  
                </div>  
            </>
        )
    }
}

export default ProfileSide