import React from 'react'
import { Button, ButtonGroup, ButtonToolbar, Table} from 'react-bootstrap'

import { listFamilyMembers } from '../graphql/queries';
import { deleteFamilyMember } from '../graphql/mutations'
import { API, graphqlOperation } from 'aws-amplify'
import { BsPencilSquare, BsTrash } from 'react-icons/bs';

class ManageFamilyList extends React.Component {

    constructor(props) {

        super(props)

        this.state = { familyMembers: [] };
    }

    deleteClick(familyMember) {
        API.graphql(graphqlOperation(deleteFamilyMember, {input: {id: familyMember.id}})).then(x => {
            this.setState((state) => {
                return { familyMembers: this.state.familyMembers.filter(fm => fm.id != familyMember.id)}
            })
        })
    }

    editClick(familyMember) {
        alert(familyMember.lastName)
    }

    componentDidMount() {
       API.graphql(graphqlOperation(listFamilyMembers)).then(x => {
           this.setState({familyMembers: x.data.listFamilyMembers.items });
       })
    }
    render() {
        return (
            <Table>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th></th>
                    </tr>    
                </thead>
                <tbody>
                    {
                        this.state.familyMembers.map((familyMember, index) => (
                            <tr key={familyMember.id ? familyMember.id : index}>
                                <td>
                                    {familyMember.firstName} {familyMember.lastName}
                                </td>
                                <td>
                                    <ButtonToolbar>
                                        <ButtonGroup className="mr-2">
                                            <Button variant="outline-primary" size="sm" block onClick={this.editClick.bind(this, familyMember)}>
                                                Edit{' '}
                                                <BsPencilSquare />
                                            </Button>
                                        </ButtonGroup>
                                        <ButtonGroup className="mr-2">
                                            <Button variant="outline-primary" size="sm" block onClick={this.deleteClick.bind(this, familyMember)}>Delete{' '}
                                                <BsTrash />                                        
                                            </Button>
                                        </ButtonGroup>
                                    </ButtonToolbar>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        )
    }
} 

export default ManageFamilyList;