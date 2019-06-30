import React from 'react';

const Stats = ({ completed, left }) => {
    return (
        <p className="stats">
            {completed} completed, {left} left
        </p>
    );
};

export default Stats;
