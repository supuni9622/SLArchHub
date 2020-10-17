import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ChatBot from '../chatBot/ChatBot';

//size="lg"
function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        style={{height: 700, width: 500, left: 0 , marginTop:'60px'}}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" style={{fontSize:'1.5rem', color:'rgb(1, 9, 26)'}}>
            ArchiBot <i style={{fontSize:'1.5rem', color:'rgb(1, 9, 26)'}} class="fas fa-robot"></i> 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
                    <ChatBot/>
        </Modal.Body>
      </Modal>
    );
  }

function ChatBotIcon() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <React.Fragment>
            <div className=" container-fluid fixed-bottom">
                <div className="row justify-content-end">
                    <button className="btn" onClick={() => setModalShow(true)}>
                        <i
                        class="fas fa-robot"
                        style={{ fontSize: "2.5rem", fontWeight: "bold", color: "rgb(1, 9, 26)" , padding:'15px', backgroundColor:'#4ECDC4',borderRadius:'60px',  boxShadow: '2px 6px 10px 0 rgba(0, 0, 0, 0.5), 2px 8px 24px 0 rgba(0, 0, 0, 0.5)'}}
                        />
                    </button>
                </div>
            </div>
            <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />

        </React.Fragment>
    )
}

export default ChatBotIcon
