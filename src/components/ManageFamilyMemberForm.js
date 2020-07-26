import React from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { Form, Button } from 'react-bootstrap'
import { createFamilyMember } from '../graphql/mutations'
import { Formik } from 'formik'
import * as yup from 'yup'

class ManageFamilyMemberForm extends React.Component {

    validationSchema = yup.object().shape({
        firstName: yup.string().min(2).max(100).required(),
        lastName: yup.string().min(2).max(100).required()
    })

    render() {

      return ( 

        <Formik 
            initialValues={{firstName:"", lastName:""}}
            validationSchema={this.validationSchema}
            onSubmit={(values, {setSubmitting, resetForm}) => {
                setSubmitting(true)

                API.graphql(graphqlOperation(createFamilyMember, {input: values}))

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
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter first name" name="firstName" onChange={handleChange} onBlur={handleBlur} value={values.firstName}/>
                </Form.Group>
                <Form.Group controlId="formDescription" >
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter last name" name="lastName" onChange={handleChange} onBlur={handleBlur} value={values.lastName} />
                </Form.Group>
                <Button variant="primary" type="submit" >Submit</Button>
            </Form>
            )}
        </Formik>
      ) 
    }  
  }

  export default ManageFamilyMemberForm;