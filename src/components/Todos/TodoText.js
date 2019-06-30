import React from 'react';
import PropTypes from 'prop-types';

const TodoText = ({
    editable,
    content,
    handleChange,
    handleKey,
    focusLost,
    focusHere,
    toggleEditable,
}) => {
    return editable ? (
        <input
            type="text"
            value={content}
            onChange={handleChange}
            className="inline-text-input"
            onKeyPress={handleKey}
            onBlur={focusLost}
            ref={focusHere}
        />
    ) : (
        <span className="todo-text" onDoubleClick={toggleEditable}>
            {content}
        </span>
    );
};

TodoText.propTypes = {
    editable: PropTypes.bool.isRequired,
    content: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleKey: PropTypes.func.isRequired,
    focusLost: PropTypes.func.isRequired,
    toggleEditable: PropTypes.func.isRequired,
};

export default TodoText;
