import React from 'react'
import { Table, Card, ListGroup } from 'react-bootstrap'

import { listFamilyMembers } from '../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify'

class ManageFamilyList extends React.Component {
    constructor(props) {

        super(props)

        this.state = { familyMembers: [] };
    }

    componentDidMount() {
       API.graphql(graphqlOperation(listFamilyMembers)).then(x => {
           this.setState({familyMembers: x.data.listFamilyMembers.items });
       })
    }
    render() {
        return (
            <Card>
                <Card.Header>Family Members:</Card.Header>
                <ListGroup>
                    {
                        this.state.familyMembers.map((familyMember, index) => (
                            <ListGroup.Item key={familyMember.id ? familyMember.id : index}>{familyMember.firstName} {familyMember.lastName}</ListGroup.Item>
                        ))
                    }
                </ListGroup>
            </Card>            
        )
    }
} 

export default ManageFamilyList;