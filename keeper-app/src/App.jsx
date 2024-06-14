import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import Note from "./Note";

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(newNote) {
    setNotes((prevNote) => {
      return [...prevNote, newNote];
    });
  }
  function deleteNode(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((nodeItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNode}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
