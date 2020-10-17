import React from 'react'
import Modal from 'react-bootstrap/Modal';
import EditIntroForm from './EditIntroForm';

function EditIntro() {
    return (
        <div>
            <Modal
               
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                       Edit Introduction
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditIntroForm></EditIntroForm>
                </Modal.Body>
           </Modal> 
        </div>
    )
}

export default EditIntro