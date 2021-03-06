import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

function Note(props) {
  
  let written = moment(props.dateTimeString).calendar();

  return(
    <p>{props.content} <em>(Note written: {written})</em></p>
  );
}

Note.propTypes = {
  content: PropTypes.string,
  dateTimeString: PropTypes.object
};

export default Note;

