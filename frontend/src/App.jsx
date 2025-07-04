import { useState, useEffect } from 'react'
import Header from './components/Header'
import NoteInput from './components/NoteInput'
import NoteList from './components/NoteList'
import ThemeToggle from "./components/ThemeToggle"

function App() {
  const [notes, setNotes] = useState([])
  const [input, setInput] = useState("")

  const fetchNotes = async () => {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/notes`)
    const data = await res.json()
    setNotes(data)
  }

  const addNote = async () => {
    if (!input.trim()) return
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/notes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: input }),
    })
    setInput("")
    fetchNotes()
  }

  const deleteNote = async (id) => {
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/notes/${id}`, {
      method: "DELETE",
    })
    fetchNotes()
  }

  
  useEffect(() => {
    fetchNotes()
  }, [])

  return (
    console.log("VITE_BACKEND_URL:", import.meta.env.VITE_BACKEND_URL);
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
