import React from 'react';
import {Link} from 'react-router-dom';
import './Button.css';

// const STYLES = ['btn--primary', 'btn-outline', 'btn--test'];
// const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
children,
type,
onClick,
className
}) => {
 
   
    return(
        <Link to='/sign-up' className='btn-mobile'>
            <button className={className} type={type} onClick={onClick}>
                {children}
            </button>
        </Link>
    )
};
