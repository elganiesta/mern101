import {
    GET_ITEMS,
    DELETE_ITEMS,
    ADD_ITEMS,
    ITEMS_LOADING
} from '../actions/types';

const initialeState = {
    items: [],
    loading: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialeState, action) {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false
            };
        case DELETE_ITEMS:
            return {
                ...state,
                items: state.items.filter((items) => items._id !== action.payload)
            };
        case ADD_ITEMS:
            return {
                ...state,
                items: [action.payload, ...state.items],
                loading: false
            };
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
};