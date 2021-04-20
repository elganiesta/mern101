import { v4 as uuid } from 'uuid';
import { GET_ITEMS } from '../actions/types';

const initialeState = {
    items: [
        { id: uuid(), name: 'Eggs' },
        { id: uuid(), name: 'Milk' },
        { id: uuid(), name: 'Steak' },
        { id: uuid(), name: 'Water' }
    ]
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state=initialeState, action) {
    switch (action.type) {
        case GET_ITEMS:
            return {...state};
        default: 
            return state;
    }
};