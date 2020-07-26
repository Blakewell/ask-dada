/* src/App.js */
import React from 'react'
import Amplify from 'aws-amplify'
import { withAuthenticator } from '@aws-amplify/ui-react'

/* bootstrap stuff */
import 'bootstrap/dist/css/bootstrap.min.css';

import awsExports from "./aws-exports";
import { Navbar, Nav} from 'react-bootstrap'
import ToDoForm from './components/ToDoForm'
import ToDoTable from './components/ToDoTable'
import Switch from 'react-bootstrap/esm/Switch';
import {Link, Route} from 'react-router-dom'

Amplify.configure(awsExports);

const App = () => {
  return (
    <div>
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>Ask Dada</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/Add">Add</Nav.Link>
            <Nav.Link as={Link} to="/List">List</Nav.Link>
          </Nav>
        </Navbar>
      </div>
      <div>
        <Switch>
          <Route exact path='/Add' component={ToDoForm} />
          <Route exact path='/List' component={ToDoTable} />
        </Switch>
      </div>
    </div>
  )
}
export default withAuthenticator(App)