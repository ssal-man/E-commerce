import SHOP_DATA from './shopdata';

const INITIAL_STATE = {
    collections:SHOP_DATA
}

export const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.payload) {
        default:
            return state;
    }
} 