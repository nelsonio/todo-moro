import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { changeSort, changeAscDesc } from '../../store/actions/';

import { Arrow } from '../Icons.js';

class SortButton extends Component {
    handleClick = () => {
        const { method, type, desc } = this.props;

        if (method === type) {
            this.props.changeAscDesc(!desc);
        } else {
            this.props.changeSort(method);
        }
    };

    render() {
        const { children, method, type, desc } = this.props;
        const active = type === method;
        const arrow = !active ? '' : desc ? <Arrow down /> : <Arrow />;

        return (
            <button
                className={active ? 'active' : ''}
                onClick={this.handleClick}
            >
                {children} {arrow}
            </button>
        );
    }
}

SortButton.propTypes = {
    method: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    desc: PropTypes.bool.isRequired,
    changeSort: PropTypes.func.isRequired,
    changeAscDesc: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    type: state.sorter.type,
    desc: state.sorter.desc,
});

export default connect(
    mapStateToProps,
    { changeSort, changeAscDesc }
)(SortButton);
