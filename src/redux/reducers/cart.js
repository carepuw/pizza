const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_CART':
            return {
                ...state,
                totalCount: state.totalCount + 1,               
                totalPrice: state.totalPrice + action.payload.price, 
                items: {
                    ...state.items,              
                    [action.payload.id + "." + action.payload.size + "." + action.payload.types]: 
                        !state.items[action.payload.id + "." + action.payload.size + "." + action.payload.types] 
                            ? [action.payload] 
                            : [ 
                                ...state.items[action.payload.id + "." + action.payload.size + "." + action.payload.types],
                                action.payload 
                            ]
                }
            }

        case 'DELETE_PIZZA_CART':
            let delState = {...state};
            delState.totalCount = delState.totalCount - 1 * action.counter;
            delState.totalPrice = delState.totalPrice - action.payload.price * action.counter;
            delete delState.items[action.key];
            return {
                ...delState,
            }

        case 'DELETE_ALL_PIZZA_FROM_CART':
            return {
                ...state,
                totalCount: 0,
                totalPrice: 0,
                items: {}
            }

        case 'CHANGE_PIZZA_COUNT':
            let changeState = {...state};
            if (action.bool) {
                changeState.totalPrice = changeState.totalPrice + action.payload.price;
                changeState.totalCount = changeState.totalCount + 1;
                changeState.items[action.key].push(action.payload);
            } else {
                changeState.totalPrice = changeState.totalPrice - action.payload.price;
                changeState.totalCount = changeState.totalCount - 1;
                changeState.items[action.key].pop(action.payload);
            }
            return {
                ...changeState,
            }

        default:
            return state;
    }
}

export default cart;