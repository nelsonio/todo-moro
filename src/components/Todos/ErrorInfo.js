import React from 'react';
import PropTypes from 'prop-types';

import './ErrorInfo.css';

const ErrorInfo = ({ description }) => (
    <div className="error-info">
        <h2>Error</h2>
        <p>{description}</p>
    </div>
);

ErrorInfo.propTypes = {
    description: PropTypes.string.isRequired,
};

export default ErrorInfo;
