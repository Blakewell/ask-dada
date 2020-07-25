import React, { useState } from 'react'
import { Table } from 'react-bootstrap'

import { API, graphqlOperation } from 'aws-amplify'
import { listTodos } from '../graphql/queries'

class ToDoTable extends React.Component {

    constructor(props) {

        super(props)

        this.state = { todos: [] };
    }

    componentDidMount() {
       API.graphql(graphqlOperation(listTodos)).then(x => {
           this.setState({todos: x.data.listTodos.items });
       })
    }

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
                this.state.todos.map((todo, index) => (
                  <tr key={todo.id ? todo.id : index}>
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

export default ToDoTable;