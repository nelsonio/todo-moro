import React, { Component } from 'react';

import { connect } from 'react-redux';
import { setFilter } from '../store/actions.js';

class FilterButton extends Component {
    handleClick = e => {
        this.props.setFilter(this.props.action);
    };

    render() {
        const { children, action, active } = this.props;
        return (
            <button
                className={action === active ? 'active' : ''}
                onClick={this.handleClick}
            >
                {children}
            </button>
        );
    }
}

const mapStateToProps = state => ({
    active: state.filter,
});

export default connect(
    mapStateToProps,
    { setFilter }
)(FilterButton);
