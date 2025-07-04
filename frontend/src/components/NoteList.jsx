function NoteList({ notes }) {
  return (
    <ul className="note-list">
      {notes.map(note => (
        <li key={note.id} className="note">
          {note.text}
        </li>
      ))}
    </ul>
  )
}

export default NoteList
