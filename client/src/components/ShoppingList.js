import React, { Component } from 'react';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { getItems, deleteItem, addItem } from '../actions/itemActions';
import { connect } from 'react-redux';

class ShoppingList extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    deleteItem = (id) => {
        this.props.deleteItem(id);
    }

    render() {
        const {items} = this.props.items;
        return (
            <ListGroup>
                <TransitionGroup className="shopping-list">
                    {
                        items.map(({_id, name}) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button className="btn btn-danger mr-4"
                                        onClick={() => {
                                            this.deleteItem(_id);
                                        }}
                                    >
                                        Delete
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))
                    }
                </TransitionGroup>
            </ListGroup>
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

 
export default connect(mapStateToProps, {getItems, deleteItem, addItem})(ShoppingList);