import React, { Component } from 'react';

import { filters } from '../../store/types.js';

import FilterButton from './FilterButton.js';

class Filters extends Component {
    render() {
        return (
            <p className="filters">
                <FilterButton action={filters.SHOW_ALL}>All</FilterButton>
                <FilterButton action={filters.SHOW_ACTIVE}>Active</FilterButton>
                <FilterButton action={filters.SHOW_COMPLETED}>
                    Completed
                </FilterButton>
            </p>
        );
    }
}

export default Filters;
