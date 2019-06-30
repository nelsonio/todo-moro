import React from 'react';
import PropTypes from 'prop-types';

const Stats = ({ completed, left }) => {
    return (
        <p className="stats">
            {completed}&nbsp;completed, {left}&nbsp;left
        </p>
    );
};

Stats.propTypes = {
    completed: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
};

export default Stats;
