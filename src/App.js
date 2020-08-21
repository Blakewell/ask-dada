/* src/App.js */
import React from 'react'
import Amplify from 'aws-amplify'
import { withAuthenticator } from '@aws-amplify/ui-react'

/* bootstrap stuff */
import 'bootstrap/dist/css/bootstrap.min.css';

import awsExports from "./aws-exports";
import { Container, Navbar, Nav} from 'react-bootstrap'
import Switch from 'react-bootstrap/esm/Switch';
import {Link, Route} from 'react-router-dom'

import ManageFamily from './components/ManageFamily'
import ManageFamilyMemberForm from './components/ManageFamilyMemberForm';

Amplify.configure(awsExports);

const App = () => {
  return (
    <div>
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>Ask Dada</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/Add">Add</Nav.Link>
            <Nav.Link as={Link} to="/Family">Family</Nav.Link>
          </Nav>
        </Navbar>
      </div>
      <Container>
        <Switch>
          <Route exact path='/Add' component={ManageFamilyMemberForm} />
          <Route exact path='/Family' component={ManageFamily} />
        </Switch>
      </Container>
    </div>
  )
}
export default withAuthenticator(App)