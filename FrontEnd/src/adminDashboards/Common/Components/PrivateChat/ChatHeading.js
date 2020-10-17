import React from 'react';

function ChatHeading({name, numberOfUsers}) {
	
	return (
		<div className="chat-header">
			<div className="user-info">
				<div className="user-name">{name}</div>
				<div className="status">
					<div className="indicator"></div>
					<span>{numberOfUsers ? numberOfUsers : null}</span>
				</div>
			</div>
			<div className="options">
				<i class="fas fa-photo-video" style={{fontSize:'1rem', color:'black'}}></i>
				 <i class="fas fa-user-plus" style={{fontSize:'1rem', color:'black'}}></i>
                 <i class="fas fa-ellipsis-v" style={{fontSize:'1rem', color:'black'}}></i>
			</div>
		</div>
	);
	
}

export default ChatHeading
