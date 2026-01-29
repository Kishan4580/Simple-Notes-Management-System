import React from 'react';
import axios from 'axios';
import './App.css';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';

/**
 * Main App component
 * Handles note management: fetching, creating, updating, deleting
 * Also manages search and pagination
 */
function App() {
  const [notes, setNotes] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [showForm, setShowForm] = React.useState(false);
  const [editingNote, setEditingNote] = React.useState(null);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [currentPage, setCurrentPage] = React.useState(1);
  const [limit] = React.useState(6);
  const [totalPages, setTotalPages] = React.useState(1);

  const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

  // Fetch notes from API
  const fetchNotes = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_BASE_URL}/notes`, {
        params: {
          page: currentPage,
          limit: limit,
          search: searchTerm
        }
      });
      setNotes(response.data.data);
      setTotalPages(response.data.pagination.totalPages);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch notes');
      console.error('Error fetching notes:', err);
    } finally {
      setLoading(false);
    }
  }, [currentPage, limit, searchTerm]);

  // Fetch notes when page or search term changes
  React.useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  // Create a new note
  const handleCreateNote = async (noteData) => {
    try {
      setError(null);
      await axios.post(`${API_BASE_URL}/notes`, noteData);
      setShowForm(false);
      setCurrentPage(1);
      fetchNotes();
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to create note');
      console.error('Error creating note:', err);
    }
  };

  // Update an existing note
  const handleUpdateNote = async (id, noteData) => {
    try {
      setError(null);
      await axios.put(`${API_BASE_URL}/notes/${id}`, noteData);
      setShowForm(false);
      setEditingNote(null);
      fetchNotes();
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to update note');
      console.error('Error updating note:', err);
    }
  };

  // Delete a note
  const handleDeleteNote = async (id) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      try {
        setError(null);
        await axios.delete(`${API_BASE_URL}/notes/${id}`);
        fetchNotes();
      } catch (err) {
        setError(err.response?.data?.error || 'Failed to delete note');
        console.error('Error deleting note:', err);
      }
    }
  };

  // Open form for editing
  const handleEditNote = (note) => {
    setEditingNote(note);
    setShowForm(true);
  };

  // Close form
  const handleCloseForm = () => {
    setShowForm(false);
    setEditingNote(null);
  };

  // Handle search input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  // Navigate to next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Navigate to previous page
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>📝 Notes Management System</h1>
        <p>Create, edit, and manage your notes</p>
      </header>

      <main className="app-main">
        {error && <div className="error-message">{error}</div>}

        <div className="search-container">
          <input
            type="text"
            placeholder="Search notes by title or description..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>

        <div className="button-container">
          {!showForm ? (
            <button
              className="btn btn-primary"
              onClick={() => setShowForm(true)}
            >
              + Add New Note
            </button>
          ) : (
            <button
              className="btn btn-secondary"
              onClick={handleCloseForm}
            >
              ✕ Cancel
            </button>
          )}
        </div>

        {showForm && (
          <NoteForm
            note={editingNote}
            onSubmit={editingNote ? 
              (data) => handleUpdateNote(editingNote._id, data) :
              handleCreateNote
            }
            onCancel={handleCloseForm}
          />
        )}

        {loading && <div className="loading">Loading notes...</div>}

        {!loading && notes.length > 0 ? (
          <>
            <NoteList
              notes={notes}
              onEdit={handleEditNote}
              onDelete={handleDeleteNote}
            />

            <div className="pagination">
              <button
                className="btn btn-pagination"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                ← Previous
              </button>
              <span className="page-info">
                Page {currentPage} of {totalPages}
              </span>
              <button
                className="btn btn-pagination"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Next →
              </button>
            </div>
          </>
        ) : (
          !loading && (
            <div className="empty-state">
              <p>No notes found. Create one to get started!</p>
            </div>
          )
        )}
      </main>
    </div>
  );
}

export default App;
