import React, { useState } from "react";

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevVal => {

      return {
        ...prevVal,
        [name]: value
      }



    })
  }

  console.log(note.content);


  function submitNote(event) {
    event.preventDefault();
    if (note.title && note.content) {

      props.onAdd(note);
      setNote({ title: "", content: "" })
    }
  }



  return (
    <div>
      <div>
        <form>
          <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />
          <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content} />
          <button onClick={submitNote}  >Add</button>
        </form>
      </div>

    </div>
  );
}

export default CreateArea;
