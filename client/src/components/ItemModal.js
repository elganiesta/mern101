import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input } from 'reactstrap';
import { addItem } from '../actions/itemActions';

class ItemModal extends Component {
    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const item = {
            name: this.state.name
        }
        this.props.addItem(item);
        this.toggle();
    }

    onChange = (e) => {
        this.setState({
            name: this.name = e.target.value
        })
    }

    render() { 
        return (
            <div>
                <Button color="dark" style={{marginBottom:'2rm'}}
                    onClick={this.toggle}
                >
                Add Item
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add to Shopping list</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Input type="text" name="name" id="item" placeholder="Shopping item" onChange={this.onChange} />
                            </FormGroup>
                            <Button color="dark" style={{marginTop: '2rem'}} block>Add Item</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    items: state.items
});
 
export default connect(mapStateToProps, {addItem}) (ItemModal);