import { useState, useEffect } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  const fetchNotes = async () => {
    const res = await fetch("http://localhost:5111/api/notes");
    const data = await res.json();
    setNotes(data);
  };

  const addNote = async () => {
    await fetch("http://localhost:5111/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: input }),
    });
    setInput("");
    fetchNotes();
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      <h1>QuickNotes</h1>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={addNote}>Add Note</button>
      <ul>
        {notes.map(note => <li key={note.id}>{note.text}</li>)}
      </ul>
    </div>
  );
}

export default App;
