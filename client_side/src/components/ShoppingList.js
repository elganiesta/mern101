import React, { useState } from 'react';
import {
    Button,
    ListGroup,
    Container,
    ListGroupItem
} from 'reactstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { v4 as uuid } from 'uuid';

const ShoppingList = () => {

    const [items, setItems] = useState([
       { id: uuid(), name: 'Eggs' },
       { id: uuid(), name: 'Milk' },
       { id: uuid(), name: 'Steak' },
       { id: uuid(), name: 'Water' },
    ]);

    const addItem = (newItem) => {
        setItems((items) => [...items, newItem]);
    }

    const deleteItem = (item) => {
        var filteredItems = items.filter(curritem => curritem.id !== item.id);
        setItems(filteredItems);
    }

    return (
        <Container>
            <Button color="dark" style={{marginBottom:'2rm'}}
                onClick={() => {
                    const name = prompt('Enter item name :');
                    addItem({id: uuid(), name: name});
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
                                            deleteItem(item);
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
 
export default ShoppingList;