import React from 'react'
import classNames from 'classnames'

const Button = ( {className, onClick, children, outline, style} ) => {
    return (
        <button 
            onClick={onClick} 
            style={style} 
            className={classNames('button', className,
                {'button--outline' : outline}
        )}>
            {children}
        </button>
    )
}

export default Button;
