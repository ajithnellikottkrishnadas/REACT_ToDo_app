import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isExpanded,setExpand]=useState(false);

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
  function zoomFunction(){

     setExpand(true);

  }



  return (
    <div>
      <div>
        <form onClick={zoomFunction}>
          {isExpanded==true ? 

          <input 
          onChange={handleChange} 
          name="title" 
          placeholder="Title" 
          value={note.title} 
          onClick={zoomFunction}/>    
           :null }

            <textarea 
            onChange={handleChange} 
            name="content" 
            placeholder="Take a note..." 
            rows={isExpanded? "3" : "1"} 
            value={note.content} 
            />
          <Zoom in={true}><button><AddIcon/></button></Zoom>
        </form>
      </div>

    </div>
  );
  
}

export default CreateArea;
