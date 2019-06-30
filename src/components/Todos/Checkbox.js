import React from 'react';
import PropTypes from 'prop-types';

import { EmptyCircle, CheckedCircle } from '../Icons.js';

const Checkbox = ({ completed, toggleCompleted }) => {
    return (
        <p onClick={toggleCompleted} className="toggler">
            <input
                type="checkbox"
                defaultChecked={completed}
                className="invisible-check"
            />
            {completed ? <CheckedCircle /> : <EmptyCircle />}
        </p>
    );
};

Checkbox.propTypes = {
    completed: PropTypes.bool.isRequired,
    toggleCompleted: PropTypes.func.isRequired,
};

export default Checkbox;
