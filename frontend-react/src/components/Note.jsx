import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function Note(props) {
  console.log('kuhsldguhoiuhsolhloh', props.timeWritten);
  return(
    <p>{props.content} <em>(Note written: {props.timeWritten})</em></p>
  );
}

Note.propTypes = {
  content: PropTypes.string,
  timeWritten: PropTypes.string
};

export default Note;

