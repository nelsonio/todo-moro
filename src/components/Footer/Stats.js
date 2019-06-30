import React from 'react';

const Stats = ({ completed, left }) => {
    return (
        <p className="stats">
            {completed}&nbsp;completed, {left}&nbsp;left
        </p>
    );
};

export default Stats;
