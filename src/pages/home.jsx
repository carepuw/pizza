import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Catigories, Sort, PizzaBlock, LoaderPizza } from '../Components'

import { setCategory, setSortBy } from '../redux/actions/filters'
import { fetchPizzas } from '../redux/actions/pizzas'
import { addPizzaToCart } from '../redux/actions/cart'

const categoryNames = ['Все', 'Мясные', 'Вегатарианские', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
  { name: 'Популярности', type: 'popular' },
  { name: 'Цене', type: 'price' },
  { name: 'Алфавиту', type: 'name' }
]

const Home = () => {
  const dispatch = useDispatch();

  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filter }) => filter);

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy, dispatch]);

  const onSelectCategory = React.useCallback((i) => {
    dispatch(setCategory(i));
  },[dispatch])

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  },[dispatch])

  const onClickAddPizza = (obj) => {
    dispatch(addPizzaToCart(obj));
  }

  return (
    <div className="container">
      <div className="content__top">
        <Catigories
          activeCategory={category}
          onClickItem={onSelectCategory}
          items={categoryNames}
        />
        <Sort 
          onClickSortType={onSelectSortType}
          activeSortType={sortBy}
          items={sortItems} 
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded ? items.map((obj) =>
          <PizzaBlock 
            onAddPizza={(obj) => onClickAddPizza(obj)}
            inCartItems={[
              [
                cartItems[obj.id + "." + obj.sizes[0] + ".0"],
                cartItems[obj.id + "." + obj.sizes[0] + ".1"]
              ],
              [
                cartItems[obj.id + "." + obj.sizes[1] + ".0"],
                cartItems[obj.id + "." + obj.sizes[1] + ".1"]
              ],
              [
                cartItems[obj.id + "." + obj.sizes[2] + ".0"],
                cartItems[obj.id + "." + obj.sizes[2] + ".1"]
              ]
            ]} 
            key={obj.id} 
            {...obj} 
          />
        ) : Array(4).fill(0).map((_, index) => <LoaderPizza key={index} />)}
      </div>
    </div>
  )
}

export default Home;