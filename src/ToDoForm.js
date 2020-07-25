import React from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { Form, Button } from 'react-bootstrap'
import { createTodo } from './graphql/mutations'
import { Formik } from 'formik'
import * as yup from 'yup'

class ToDoForm extends React.Component {

    validationSchema = yup.object().shape({
        name: yup.string().min(2).max(100).required(),
        description: yup.string().min(2).max(100).required()
    })

    render() {

      return ( 

        <Formik 
            initialValues={{name:"", description:""}}
            validationSchema={this.validationSchema}
            onSubmit={(values, {setSubmitting, resetForm}) => {
                setSubmitting(true)

                API.graphql(graphqlOperation(createTodo, {input: values}))

                resetForm()

                setSubmitting(false)
            }}
        >
            {}
            {(
                { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}
            ) => (
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="name" onChange={handleChange} onBlur={handleBlur} value={values.name}/>
                </Form.Group>
                <Form.Group controlId="formDescription" >
                    <Form.Label>Description:</Form.Label>
                    <Form.Control type="text" placeholder="Enter description" name="description" onChange={handleChange} onBlur={handleBlur} value={values.description} />
                </Form.Group>
                <Button variant="primary" type="submit" >Submit</Button>
            </Form>
            )}
        </Formik>
      ) 
    }  
  }

  export default ToDoForm;