import { useState, useEffect } from 'react'
import Header from './components/Header'
import NoteInput from './components/NoteInput'
import NoteList from './components/NoteList'
import ThemeToggle from "./components/ThemeToggle"

function App() {
  const [notes, setNotes] = useState([])
  const [input, setInput] = useState("")

  const fetchNotes = async () => {
    const res = await fetch("http://backend:5111/api/notes")
    const data = await res.json()
    setNotes(data)
  }

  const addNote = async () => {
    if (!input.trim()) return
    await fetch("http://backend:5111/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: input }),
    })
    setInput("")
    fetchNotes()
  }

  const deleteNote = async (id) => {
    await fetch(`http://backend:5111/api/notes/${id}`, {
      method: "DELETE",
    })
    fetchNotes()
  }

  
  useEffect(() => {
    fetchNotes()
  }, [])

  return (
   <main className="container">
      <div className="header-bar">
        <Header />
        <ThemeToggle />
      </div>
      <NoteInput input={input} setInput={setInput} addNote={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} />
    </main>
  )
}

export default App
