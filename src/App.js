/* src/App.js */
import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation, container } from 'aws-amplify'
import { listTodos } from './graphql/queries'
import { withAuthenticator } from '@aws-amplify/ui-react'

/* bootstrap stuff */
import 'bootstrap/dist/css/bootstrap.min.css';

import awsExports from "./aws-exports";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ToDoForm from './ToDoForm'
import { Table, Navbar } from 'react-bootstrap'

Amplify.configure(awsExports);


const App = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchTodos()
  }, [])

  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listTodos))
      const todos = todoData.data.listTodos.items
      setTodos(todos)
    } catch (err) { console.log('error fetching todos') }
  }




  class ToDoTable extends React.Component {
    render() {
      return (
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {
                todos.map((todo, index) => (
                  <tr>
                    <td>{todo.name}</td>
                    <td>{todo.description}</td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
      )
    }
  }

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