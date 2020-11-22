import React from 'react'
import PropTypes from 'prop-types'

const Catigories = React.memo(( { activeCategory, items, onClickItem } ) => {
    return (
        <div className="categories">
            <ul>
                {items.map( (item,index) => 
                    <li 
                        className={activeCategory === index ? 'active' : ''} 
                        onClick={() => onClickItem(index)} 
                        key={`${item}_${index}`}
                    >{item}</li>
                )}
            </ul>
        </div>
    )
})

Catigories.propTypes = {
    activeCategory: PropTypes.number.isRequired, 
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickItem: PropTypes.func.isRequired,
};

Catigories.defaultProps = {
    activeCategory: 0, 
    items: [],
};

export default Catigories;