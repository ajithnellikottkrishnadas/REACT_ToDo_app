import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(note) {
      console.log("contetnt: ", note);
      setNotes(prevNote => {
        return (
          [...prevNote, note]
        )
      });
    
  }

  function deleteFunction(id) {
    console.log("delete function triggered");
    setNotes(prevNote => {
      return prevNote.filter((note, index) => {
        return index !== id;

      })
    })
  }



  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItems, index) => {
        return <Note
          title={noteItems.title}
          content={noteItems.content}
          key={index}
          id={index}
          onDelete={deleteFunction}
        />
      })}
      <Footer />
    </div>
  );
}

export default App;
