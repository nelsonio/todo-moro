import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { setFilter } from '../../store/actions/';

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

FilterButton.propTypes = {
    action: PropTypes.string.isRequired,
    active: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    active: state.filter,
});

export default connect(
    mapStateToProps,
    { setFilter }
)(FilterButton);
