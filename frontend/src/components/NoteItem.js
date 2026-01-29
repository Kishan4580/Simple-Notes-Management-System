import React from 'react';

/**
 * Individual note card component
 */
function NoteItem({ note, onEdit, onDelete }) {
  // Format date to readable format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Truncate text to max length
  const truncateText = (text, maxLength = 100) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <div className="note-item">
      <div className="note-header">
        <h3 className="note-title">{note.title}</h3>
        <div className="note-actions">
          <button
            className="btn-icon btn-edit"
            onClick={() => onEdit(note)}
            title="Edit note"
            aria-label="Edit note"
          >
            ✏️
          </button>
          <button
            className="btn-icon btn-delete"
            onClick={() => onDelete(note._id)}
            title="Delete note"
            aria-label="Delete note"
          >
            🗑️
          </button>
        </div>
      </div>

      <p className="note-description">
        {truncateText(note.description, 150)}
      </p>

      <div className="note-footer">
        <span className="note-date">
          Created: {formatDate(note.createdAt)}
        </span>
        {new Date(note.createdAt).getTime() !== new Date(note.updatedAt).getTime() && (
          <span className="note-date">
            Updated: {formatDate(note.updatedAt)}
          </span>
        )}
      </div>
    </div>
  );
}

export default NoteItem;
