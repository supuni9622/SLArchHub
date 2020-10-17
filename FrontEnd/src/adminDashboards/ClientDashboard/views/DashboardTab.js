import React from 'react'
import Chat from '../../Common/Components/ChatTab/chat';
import All from '../../Common/Components/Count/All';

function DashboardTab() {
    return (
        <div className="row">
                <div className="col-md-8 col-sm-6 col-xs-7">
                    <All/>
               </div>
               <div className="col-md-4 col-sm-6 col-xs-5" style={{position: 'fixed', right:'0'}}>
                    <Chat></Chat>
               </div>
            </div>
    )
}

export default DashboardTab