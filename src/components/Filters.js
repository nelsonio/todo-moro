import React, { Component } from 'react';

class Filters extends Component {
    render() {
        return (
            <p className="filters">
                <button className="active">All</button>
                <button>Active</button>
                <button>Completed</button>
            </p>
        );
    }
}

export default Filters;
