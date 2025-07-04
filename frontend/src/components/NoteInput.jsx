function NoteInput({ input, setInput, addNote }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    addNote()
  }

  return (
    <form onSubmit={handleSubmit} className="note-input">
      <input
        type="text"
        placeholder="Type a note..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default NoteInput
