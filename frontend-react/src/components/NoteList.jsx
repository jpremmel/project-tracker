import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

function NoteList(props) {
  console.log('check in notelist', props.noteList);
  return(
    <div>
      {props.noteList.map((thisNote, index) =>
        <Note 
          content={thisNote.note}
          key={index} 
          timeWritten={thisNote.dateTimeString}/>
      )}
    </div>
  );
}

NoteList.propTypes = {
  noteList: PropTypes.array
};

export default NoteList;