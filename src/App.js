/* src/App.js */
import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { listTodos } from './graphql/queries'
import { withAuthenticator } from '@aws-amplify/ui-react'

/* bootstrap stuff */
import 'bootstrap/dist/css/bootstrap.min.css';

import awsExports from "./aws-exports";
import { Navbar, Container, Row, Col} from 'react-bootstrap'
import ToDoForm from './components/ToDoForm'
import ToDoTable from './components/ToDoTable'

Amplify.configure(awsExports);

const App = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Ask Dada</Navbar.Brand>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <ToDoForm />
         </Col>
        </Row>
        <Row></Row>
        <Row>
          <Col>
          <ToDoTable />
          </Col>
        </Row>
        </Container>
    </div>
  )
}
export default withAuthenticator(App)