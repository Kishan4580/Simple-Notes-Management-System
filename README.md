# Notes Management Application

A full-stack Notes Management application built with Node.js/Express backend and MongoDB database.

## Overview

A simple yet powerful notes management application where users can create, read, update, and delete notes with search and pagination functionality.

## Features

- **Add Note**: Create notes with a title and description
- **Edit Note**: Edit existing notes
- **Delete Note**: Remove notes
- **View Notes List**: Browse all notes with pagination
- **Search Notes**: Search notes by title or description
- **Pagination**: Navigate through notes with configurable page size
- **Validation**: Input validation with meaningful error messages
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Technology Stack

- **Backend**: Node.js with Express.js
- **Database**: MongoDB with Mongoose
- **Frontend**: React with Axios
- **Styling**: CSS3 with responsive design
- **Environment**: dotenv for configuration management

## Project Structure

```
notes-management-app/
├── server.js                    # Express server
├── models/
│   └── Note.js                 # MongoDB Note schema
├── controllers/
│   └── notesController.js      # API business logic
├── routes/
│   └── notes.js                # API route definitions
├── middleware/
│   └── errorHandler.js         # Error handling middleware
├── frontend/                    # React application
│   ├── public/index.html
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   └── components/
│   │       ├── NoteForm.js
│   │       ├── NoteList.js
│   │       └── NoteItem.js
│   └── package.json
├── package.json
├── .env.example
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm

### Installation

1. Clone the repository
2. Install backend dependencies:
```bash
npm install
```

3. Create `.env` file from template:
```bash
cp .env.example .env
```

4. Update `.env` with your MongoDB URI and preferred port:
```
MONGODB_URI=mongodb://localhost:27017/notes-management
PORT=5000
NODE_ENV=development
```

5. Install frontend dependencies:
```bash
cd frontend
npm install
cd ..
```

### Running the Application

**Start the backend server:**
```bash
npm start        # Production mode
npm run dev      # Development mode with auto-reload
```

**In a new terminal, start the frontend:**
```bash
cd frontend
npm start
```

Backend runs on `http://localhost:5000`
Frontend runs on `http://localhost:3000`

## API Endpoints

### Get All Notes
```
GET /api/notes?page=1&limit=10&search=query
```

**Query Parameters:**
- `page` (optional): Page number
- `limit` (optional): Notes per page
- `search` (optional): Search term

### Create Note
```
POST /api/notes
Content-Type: application/json

{
  "title": "My Note",
  "description": "Note content here"
}
```

### Get Single Note
```
GET /api/notes/:id
```

### Update Note
```
PUT /api/notes/:id
Content-Type: application/json

{
  "title": "Updated Title",
  "description": "Updated content"
}
```

### Delete Note
```
DELETE /api/notes/:id
```

## Field Validation

- **Title**: Required, maximum 100 characters
- **Description**: Required, maximum 5000 characters

## Error Handling

The API returns structured error responses with appropriate HTTP status codes:

```json
{
  "success": false,
  "error": "Error message"
}
```

Common status codes:
- `200 OK`: Successful request
- `201 Created`: Resource created
- `400 Bad Request`: Invalid input
- `404 Not Found`: Resource not found
- `500 Internal Server Error`: Server error

## Development

### Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with auto-reload
- `npm test` - Run tests

### Code Style

- Use camelCase for variables and functions
- Use PascalCase for classes and components
- Add comments for complex logic
- Handle errors properly

## Frontend Features

The React frontend includes:
- Create, edit, and delete notes
- Real-time search
- Pagination controls
- Form validation with error messages
- Responsive design
- Character count for inputs
- Timestamp display

See [frontend/README.md](./frontend/README.md) for frontend-specific documentation.

## Troubleshooting

### MongoDB Connection Failed
- Ensure MongoDB is running
- Check MONGODB_URI in .env file
- Verify database user permissions

### Port Already in Use
- Change PORT in .env file
- Or kill the process using the port

### Frontend Can't Connect to Backend
- Verify backend is running on port 5000
- Check browser console for errors
- Verify REACT_APP_API_URL in frontend/.env

## Future Enhancements

- User authentication
- Note categories and tags
- Rich text editor support
- Note sharing and collaboration
- Dark mode
- Mobile app (React Native)
- Advanced search and filtering
- Note version history

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome. Please feel free to submit pull requests.

## Support

For issues or questions, please create an issue in the repository.
