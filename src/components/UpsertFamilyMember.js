import React from 'react'
import ReactDOM from 'react-dom'
import { Button,  Modal } from 'react-bootstrap'
import { useState } from 'react';

const UpsertFamilyMember = ({ isShowing, hide}) =>  {

  const [idx, setIdx] = useState(1)

  function saveChanges() {
    setIdx(idx + 1)  
  }

  return (

    ReactDOM.createPortal(
        <Modal show={isShowing} >
          <Modal.Header> 
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{idx}</p>
          </Modal.Body>
        
          <Modal.Footer>
            <Button variant="secondary" onClick={hide}>Close</Button>
            <Button variant="primary" onClick={() => saveChanges()}>Save changes</Button>
          </Modal.Footer>
      </Modal>, document.body
  ))
} 

export default UpsertFamilyMember;