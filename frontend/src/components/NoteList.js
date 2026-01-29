import React from 'react';
import NoteItem from './NoteItem';

/**
 * Grid container for displaying notes
 */
function NoteList({ notes, onEdit, onDelete }) {
  return (
    <div className="notes-grid">
      {notes.map((note) => (
        <NoteItem
          key={note._id}
          note={note}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default NoteList;
