import React from 'react'
import Modal from 'react-bootstrap/Modal';
//import Button from 'react-bootstrap/Button';
//import ModalDialog from 'react-bootstrap/ModalDialog';
//import ModalHeader from 'react-bootstrap/ModalHeader';
//import ModalTitle from 'react-bootstrap/ModalTitle';
//import ModalFooter from 'react-bootstrap/ModalFooter';

import AddIntroForm from './AddIntroForm';

function AddIntro(props) {
    return (
        <React.Fragment>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Introduction
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddIntroForm></AddIntroForm>
                </Modal.Body>
           </Modal> 
    </React.Fragment>
    )
}

export default AddIntro
