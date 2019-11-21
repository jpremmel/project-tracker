import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function Note(props) {
  return(
    <p>{props.content} <em>(Note written: {props.timeWritten.calendar()})</em></p>
  );
}

Note.propTypes = {
  content: PropTypes.string,
  timeWritten: PropTypes.instanceOf(Moment)
}

export default Note;