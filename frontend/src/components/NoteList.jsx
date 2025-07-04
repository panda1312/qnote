function NoteList({ notes, onDelete }) {
  return (
    <ul className="note-list">
      {notes.map(note => (
        <li key={note.id} className="note">
          {note.text}
          <button
            aria-label={`Delete note: ${note.text}`}
            className="delete-btn"
            onClick={() => onDelete(note.id)}
          >
            ✕
          </button>
        </li>
      ))}
    </ul>
  )
}


export default NoteList
