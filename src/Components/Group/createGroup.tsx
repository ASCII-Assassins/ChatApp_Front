import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import axios from 'axios';
import {toast} from "sonner";


function CreateGroup({setGroups}) {
    const [show, setShow] = useState(false);
    const [step, setStep] = useState(1);
    const [isGroupPrivate, setGroupPrivate] = useState(false);
    const [groupName, setGroupName] = useState("");
    const [groupDescription, setGroupDescription] = useState("");

    const handleClose = () => {
        setShow(false);
        setStep(1);
        setGroupPrivate(false)
        setGroupName("");
        setGroupDescription("")
        toast.success('Your group was added successfully');

    };
    const handleShow = () => setShow(true);
    const handleNext = () => setStep(2);
    const handleSubmit = async () => {
        try {
            let data = {
                "name": groupName,
                "description": groupDescription,
                "owner": "673c2e502eadba103c7a8280",
                "isPrivate": isGroupPrivate,
                "members": []
            }
            let result = await axios.post("http://localhost:3000/group", data);
            setGroups(state =>[...state, data]);
            handleClose();
        } catch (err) {
            if (err.response) {
                const errorMessage = err.response.data.message || 'Something went wrong';
                console.log('Error: ', errorMessage);
                toast.error('something bad happend please try again')
            } else {
                console.error('Unexpected error: ', err);
            }
        }

    };

    return (
        <>
            <Button variant="" onClick={handleShow}>
                <a  data-bs-toggle="modal" data-bs-target="#new-chat" className="add-icon btn-primary p-0 d-flex align-items-center justify-content-center"><i className="ti ti-plus"></i></a>
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Group</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {step === 1 && (
                        <>
                            <h6>Choose the type of your group</h6>
                            <div className='d-flex gap-4'>
                                <Card className={`border rounded ${isGroupPrivate ? 'border-primary' : ''}`} style={{ width: '18rem' }}>
                                    <Card.Header className='d-flex justify-content-center'>
                                        <input onClick={() => setGroupPrivate(true)} name="flexRadioDefault" type="radio" id="private" />
                                        Private Group
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                            Only the people who are invited and accepted can join this group
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className={`border rounded ${!isGroupPrivate ? 'border-primary' : ''}`} style={{ width: '18rem' }}>
                                    <Card.Header className='d-flex justify-content-center'>
                                        <input onClick={() => setGroupPrivate(false)} type="radio" name="flexRadioDefault" id="public" />
                                        Public Group
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                            Anyone can join the group
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </>
                    )}
                    {step === 2 && (
                        <>
                            <Form>
                                <div className="d-flex justify-content-center align-items-center">
                                    <label htmlFor="avatar-upload" className="set-pro avatar avatar-xxl rounded-circle mb-3 p-1">
                                        <span className="avatar avatar-xl bg-transparent-dark rounded-circle"></span>
                                        <span className="add avatar avatar-sm d-flex justify-content-center align-items-center">
                                            <i className="ti ti-plus rounded-circle d-flex justify-content-center align-items-center"></i>
                                        </span>
                                    </label>
                                    <input type="file" id="avatar-upload" style={{ display: "none" }} accept="image/*" />
                                </div>
                                <Form.Group className="mb-10 col-lg-12">
                                    <Form.Label>Group Name</Form.Label>
                                    <div className="input-icon mb-3 position-relative">
                                        <Form.Control
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter group name"
                                            value={groupName}
                                            onChange={(e) => setGroupName(e.target.value)}
                                        />
                                        <span className="icon-addon">
                                            <i className="ti ti-users-group"></i>
                                        </span>
                                    </div>
                                </Form.Group>
                                <Form.Group className="mb-10 col-lg-12" controlId="groupDescription">
                                    <Form.Label>Group Name</Form.Label>
                                    <div className="input-icon mb-3 position-relative">
                                        <Form.Control
                                        as="textarea"
                                        rows={1}
                                        placeholder="Enter group description"
                                        value={groupDescription}
                                        onChange={(e) => setGroupDescription(e.target.value)}
                                        />
                                        <span className="icon-addon">
                                            <i className="ti ti-info-octagon"></i>
                                        </span>
                                    </div>
                                </Form.Group>
                            </Form>
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    {step === 1 ? (
                        <Button variant="primary" onClick={handleNext}>
                            Next
                        </Button>
                    ) : (
                        <Button variant="primary" onClick={handleSubmit}>
                            Submit
                        </Button>
                    )}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CreateGroup;
