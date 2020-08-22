import React, { useState, useEffect } from 'react'
import { Button, ButtonGroup, ButtonToolbar, Table, Container, Row, Col, Modal } from 'react-bootstrap'

import { listFamilyMembers } from '../graphql/queries';
import { deleteFamilyMember } from '../graphql/mutations'
import { API, graphqlOperation } from 'aws-amplify'
import { BsPencilSquare, BsTrash, BsPlus, BsPlusCircle } from 'react-icons/bs';

import UpsertFamilyMember from '../components/UpsertFamilyMember'
import useModal from '../components/UpsertFamilyMemberHook'

const ManageFamily = () => {

    const [familyMembers, setFamilyMembers] = useState([])
    const {isShowing, toggle} = useModal();

    useEffect(() => {
        fetchFamilyMembers()
    })

    async function fetchFamilyMembers() {
        try {
            API.graphql(graphqlOperation(listFamilyMembers)).then(x => {
                setFamilyMembers(x.data.listFamilyMembers.items)
            })
        }
        catch (err) {
            console.log('error fetching family members')
        }
    }

    function editClick(familyMember) {
        alert('edit')
    }

    function deleteClick(familyMember) {
        API.graphql(graphqlOperation(deleteFamilyMember, { input: { id: familyMember.id } })).then(x => {
            setFamilyMembers(familyMembers.filter(fm => fm.id != familyMembers.id))
        })
    }

    function addClick() {
        toggle();
    }

    return (
        <div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        familyMembers.map((familyMember, index) => (
                                            <tr key={familyMember.id ? familyMember.id : index}>
                                                <td>
                                                    {familyMember.firstName} {familyMember.lastName}
                                                </td>
                                                <td>
                                                    <ButtonToolbar>
                                                        <ButtonGroup className="mr-2">
                                                            <Button variant="outline-primary" size="sm" block onClick={() => editClick(familyMember)}>Edit{' '}
                                                                <BsPencilSquare />
                                                            </Button>
                                                        </ButtonGroup>
                                                        <ButtonGroup className="mr-2">
                                                            <Button variant="outline-primary" size="sm" block onClick={() => deleteClick(familyMember)}>Delete{' '}
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
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant="success" onClick={addClick}><BsPlusCircle />{' '}Add Family Member</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <UpsertFamilyMember isShowing={isShowing} hide={toggle} />
            </div>
        </div>
    );
}

export default ManageFamily;