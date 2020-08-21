import React from 'react'
import ReactDOM from 'react-dom'
import { Button,  Modal } from 'react-bootstrap'

const UpsertFamilyMember = ({ isShowing, hide}) => isShowing ? 
    ReactDOM.createPortal(
        <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>
      
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>, document.body
) : null;

export default UpsertFamilyMember;