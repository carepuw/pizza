export const addPizzaToCart = (pizzaObj) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj,
})

export const deletePizzaCart = (key, pizzaObj, counter) => ({
    type: 'DELETE_PIZZA_CART',
    payload: pizzaObj,
    key: key,
    counter: counter,
})

export const deleteAllFromPizzaCart = () => ({
    type: 'DELETE_ALL_PIZZA_FROM_CART'
})

export const changePizzaCountOnCart = (key, pizzaObj, bool) => ({
    type: 'CHANGE_PIZZA_COUNT',
    payload: pizzaObj,
    key: key,
    bool: bool,
})