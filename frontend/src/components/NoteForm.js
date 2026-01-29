import React from 'react';

/**
 * Form component for creating and editing notes
 */
function NoteForm({ note, onSubmit, onCancel }) {
  const [title, setTitle] = React.useState(note?.title || '');
  const [description, setDescription] = React.useState(note?.description || '');
  const [errors, setErrors] = React.useState({});

  // Validate form inputs
  const validateForm = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = 'Title is required';
    } else if (title.length > 100) {
      newErrors.title = 'Title must be less than 100 characters';
    }

    if (!description.trim()) {
      newErrors.description = 'Description is required';
    } else if (description.length > 5000) {
      newErrors.description = 'Description must be less than 5000 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit({
        title: title.trim(),
        description: description.trim()
      });
      setTitle('');
      setDescription('');
      setErrors({});
    }
  };

  return (
    <div className="note-form-container">
      <form className="note-form" onSubmit={handleSubmit}>
        <h2>{note ? 'Edit Note' : 'Create New Note'}</h2>

        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Enter note title (max 100 characters)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength="100"
            className={`form-input ${errors.title ? 'input-error' : ''}`}
          />
          {errors.title && <span className="error-text">{errors.title}</span>}
          <span className="char-count">{title.length}/100</span>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            placeholder="Enter note description (max 5000 characters)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength="5000"
            rows="6"
            className={`form-textarea ${errors.description ? 'input-error' : ''}`}
          />
          {errors.description && <span className="error-text">{errors.description}</span>}
          <span className="char-count">{description.length}/5000</span>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            {note ? '💾 Update Note' : '✏️ Create Note'}
          </button>
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            ✕ Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default NoteForm;
