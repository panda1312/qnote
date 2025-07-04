import { useState, useEffect } from 'react'
import Header from './components/Header'
import NoteInput from './components/NoteInput'
import NoteList from './components/NoteList'

function App() {
  const [notes, setNotes] = useState([])
  const [input, setInput] = useState("")

  const fetchNotes = async () => {
    const res = await fetch("http://localhost:5111/api/notes")
    const data = await res.json()
    setNotes(data)
  }

  const addNote = async () => {
    if (!input.trim()) return
    await fetch("http://localhost:5111/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: input }),
    })
    setInput("")
    fetchNotes()
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  return (
    <main className="container">
      <Header />
      <NoteInput input={input} setInput={setInput} addNote={addNote} />
      <NoteList notes={notes} />
    </main>
  )
}

export default App
