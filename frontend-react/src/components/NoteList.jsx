import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

function NoteList(props) {
  return(
    <div>
      {props.noteList.map((thisNote, index) =>
        <Note 
          content={thisNote.content}
          key={index} 
          dateTimeString={thisNote.dateTimeString}/>
      )}
    </div>
  );
}

NoteList.propTypes = {
  noteList: PropTypes.array
};

export default NoteList;