/* src/App.js */
import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation, container } from 'aws-amplify'
import { createTodo } from './graphql/mutations'
import { listTodos } from './graphql/queries'
import { withAuthenticator } from '@aws-amplify/ui-react'

/* bootstrap stuff */
import button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import awsExports from "./aws-exports";
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Form, Table, Navbar } from 'react-bootstrap'

Amplify.configure(awsExports);

const initialState = { name: '', description: '' }

const App = () => {
  const [formState, setFormState] = useState(initialState)
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchTodos()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listTodos))
      const todos = todoData.data.listTodos.items
      setTodos(todos)
    } catch (err) { console.log('error fetching todos') }
  }

  async function addTodo() {
    try {
      if (!formState.name || !formState.description) return
      const todo = { ...formState }
      setTodos([...todos, todo])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createTodo, {input: todo}))
    } catch (err) {
      console.log('error creating todo:', err)
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
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" onChange={event => setInput('name', event.target.value)} />
              </Form.Group>
              <Form.Group controlId="formDescription" >
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter description" onChange={event => setInput('description', event.target.value)} />
              </Form.Group>
              <Button variant="primary" onClick={addTodo}>Create Todo</Button>
            </Form>
          </Col>
        </Row>
        <Row></Row>
        <Row>
          <Col>
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
          </Col>
        </Row>
        </Container>
    </div>
  )
}
export default withAuthenticator(App)