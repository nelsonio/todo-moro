import React from 'react';
import PropTypes from 'prop-types';

import './Icons.css';

export const Pen = () => (
    <svg version="1" viewBox="0 0 24 24" className="icon pen">
        <path d="M24 5V4l-4-4h-1l-3 3 5 5M0 19v5h5L20 9l-5-5L0 19z" />
    </svg>
);

export const Remove = () => (
    <svg version="1" viewBox="0 0 24 24" className="icon remove">
        <path d="M12 0a12 12 0 1 1 0 24 12 12 0 0 1 0-24m4 6l-4 4-4-4-2 2 4 4-4 4 2 2 4-4 4 4 2-2-4-4 4-4-2-2z" />
    </svg>
);

export const Check = () => (
    <svg version="1" viewBox="0 0 24 24" className="icon check">
        <path d="M8 22l-8-8 4-4 4 5L20 2l4 4L8 22z" />
    </svg>
);

export const EmptyCircle = () => (
    <svg version="1" viewBox="0 0 24 24" className="icon empty-circle">
        <path d="M12 0C5 0 0 5 0 12s5 12 12 12 12-5 12-12S19 0 12 0z" />
    </svg>
);

export const CheckedCircle = () => (
    <svg version="1" viewBox="0 0 24 24" className="icon checked-circle">
        <path d="M10 18l-6-6 1-2 5 5 9-10 1 2m-8-7C5 0 0 5 0 12s5 12 12 12 12-5 12-12S19 0 12 0z" />
    </svg>
);

export const Arrow = ({ down }) => (
    <svg
        version="1"
        viewBox="0 0 24 24"
        className={`icon arrow ${down ? ' down' : ''}`}
    >
        <path d="M24 19H0L12 5l12 14z" />
    </svg>
);

Arrow.propTypes = {
    down: PropTypes.bool,
};
