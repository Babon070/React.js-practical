import React from 'react';
import { Link } from 'react-router-dom';

const Redirectbutton = ({headerButton, title, type}) => {
    return (
        <Link className={type === 'light' ? "link link-light" : 'link link-dark'} to={headerButton}>
                {title}
        </Link>
    );
}

export default Redirectbutton;
