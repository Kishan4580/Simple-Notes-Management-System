# Notes Management System - Frontend

A modern React-based user interface for the Notes Management System. This frontend application provides an intuitive way to create, read, update, and delete notes with advanced features like search and pagination.

## Features

- ✅ **Create Notes** - Add new notes with title and description
- ✅ **Edit Notes** - Update existing notes
- ✅ **Delete Notes** - Remove notes with confirmation
- ✅ **Search** - Search notes by title or description in real-time
- ✅ **Pagination** - Browse notes with configurable page size
- ✅ **Responsive Design** - Works on desktop, tablet, and mobile devices
- ✅ **Form Validation** - Client-side validation with helpful error messages
- ✅ **Character Count** - Real-time character count for title and description
- ✅ **Date Display** - Shows creation and update timestamps

## Tech Stack

- **React** ^18.2.0 - UI framework
- **Axios** ^1.6.2 - HTTP client for API communication
- **CSS3** - Styling with responsive design
- **JSDoc** - Comprehensive code documentation

## Project Structure

```
frontend/
├── public/
│   └── index.html              # HTML entry point
├── src/
│   ├── components/
│   │   ├── NoteForm.js         # Form for creating/editing notes
│   │   ├── NoteList.js         # Container for displaying notes
│   │   └── NoteItem.js         # Individual note card component
│   ├── App.js                  # Main application component
│   ├── App.css                 # Application styling
│   ├── index.js                # React DOM render entry point
├── package.json                # Dependencies and scripts
├── .gitignore                  # Git ignore rules
└── README.md                   # This file
```

## Getting Started

### Prerequisites

- Node.js v14 or higher
- npm package manager
- Backend API running on http://localhost:5000

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file (optional, for custom API URL):
```env
REACT_APP_API_URL=http://localhost:5000/api
```

### Running the Application

#### Development Mode
```bash
npm start
```
The application will open in your browser at http://localhost:3000

#### Production Build
```bash
npm run build
```
Creates an optimized production build in the `build` folder.

## API Integration

The frontend communicates with the backend API at:
- **Default**: `http://localhost:5000/api`
- **Custom**: Set `REACT_APP_API_URL` environment variable

### API Endpoints Used

- `GET /notes` - Fetch notes with pagination and search
- `GET /notes/:id` - Fetch a single note
- `POST /notes` - Create a new note
- `PUT /notes/:id` - Update a note
- `DELETE /notes/:id` - Delete a note

## Component Documentation

### App.js
Main application component that:
- Manages global state for notes, loading, and errors
- Handles API communication
- Manages search and pagination logic
- Renders the main UI layout

**Key Functions:**
- `fetchNotes()` - Fetches notes from the backend
- `handleCreateNote()` - Creates a new note
- `handleUpdateNote()` - Updates an existing note
- `handleDeleteNote()` - Deletes a note
- `handleSearch()` - Handles search input changes
- `handleNextPage()` / `handlePrevPage()` - Pagination control

### NoteForm.js
Form component for creating and editing notes:
- Title input with max 100 character limit
- Description textarea with max 5000 character limit
- Real-time character count display
- Form validation with error messages
- Submit and cancel buttons

### NoteList.js
Container component that displays notes in a grid layout:
- Maps through note array
- Renders individual NoteItem components
- Responsive grid layout

### NoteItem.js
Individual note card component:
- Displays note title, description preview, and dates
- Edit and delete action buttons
- Automatically formats and displays timestamps
- Truncates long descriptions for preview

## Styling

The application uses a modern gradient design with:
- Purple/blue color scheme
- Smooth transitions and hover effects
- Fully responsive layout
- Mobile-first approach
- Accessible UI components

### Color Scheme
- Primary: #667eea (Blue)
- Secondary: #764ba2 (Purple)
- Success: #4caf50 (Green)
- Error: #ef5350 (Red)
- Neutral: #f0f0f0 (Light Gray)

## Form Validation

The form validates:
- **Title**: Required, max 100 characters
- **Description**: Required, max 5000 characters
- Real-time feedback with error messages
- Character count display

## Features in Detail

### Search
- Real-time search across title and description
- Automatically resets pagination when searching
- Debounced input for performance

### Pagination
- Shows current page and total pages
- Previous/Next navigation buttons
- Disabled state for boundary pages
- Configurable page size (default: 6)

### Error Handling
- Displays user-friendly error messages
- Shows loading state while fetching
- Handles connection failures gracefully

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### API Connection Errors
- Ensure backend server is running on port 5000
- Check `REACT_APP_API_URL` environment variable
- Verify CORS is enabled on the backend

### Port Already in Use
- Change the port: `PORT=3001 npm start`
- Or kill the process using port 3000

### Module Not Found
- Run `npm install` to install dependencies
- Clear node_modules: `rm -rf node_modules && npm install`

## Future Enhancements

- Note categories/tags
- Note favorites/pinning
- Rich text editor support
- Dark mode toggle
- Note sharing functionality
- Keyboard shortcuts
- Undo/Redo functionality
- Auto-save drafts
- Note templates

## Contributing

Contributions are welcome! Please feel free to submit pull requests.

## License

This project is licensed under the MIT License - see LICENSE file for details.

## Support

For issues or questions, please create an issue in the repository or contact the development team.
