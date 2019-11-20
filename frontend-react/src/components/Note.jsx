import React from 'react';
import PropTypes from 'prop-types';

function Note(props) {
  return(
    <p>{props.content}</p>
  );
}

Note.propTypes = {
  content: PropTypes.string
}

export default Note;