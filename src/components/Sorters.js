import React, { Component } from 'react';

import { sorting } from '../store/types.js';

import SortButton from './SortButton.js';

class Sorters extends Component {
    render() {
        return (
            <p className="sort">
                <SortButton method={sorting.BY_ABC}>Abc</SortButton>
                <SortButton method={sorting.BY_DATE}>Date</SortButton>
            </p>
        );
    }
}

export default Sorters;
