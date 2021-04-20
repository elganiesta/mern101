import React, { Component } from 'react';
import { Button, ListGroup, Container, ListGroupItem } from 'reactstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import PropTypes from 'prop-types';
import { getItems } from '../actions/itemActions';
import { connect } from 'react-redux';

class ShoppingList extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    render() {
        const {items} = this.props.items;
        return (
            <Container>
                <Button color="dark" style={{marginBottom:'2rm'}}
                    onClick={() => {
                        // const name = prompt('Enter item name :');
                        // addItem({id: uuid(), name: name});
                    }}
                >
                Add Item
                </Button>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {
                            items.map((item) => (
                                <CSSTransition key={item.id} timeout={500} classNames="fade">
                                    <ListGroupItem>
                                        <Button className="btn btn-danger mr-4"
                                            onClick={() => {
                                                // deleteItem(item);
                                            }}
                                        >
                                            Delete
                                        </Button>
                                        {item.name}
                                    </ListGroupItem>
                                </CSSTransition>
                            ))
                        }
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    items: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    items: state.items
});

 
export default connect(mapStateToProps, {getItems})(ShoppingList);