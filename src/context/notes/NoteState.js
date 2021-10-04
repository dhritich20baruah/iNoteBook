import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  //Get all notes
  const getNotes = async () => {
    //API call
  const response = await fetch(`${host}/api/notes/fetchallnotes`, {
   method: 'GET',
   headers: {
     'Content-Type': 'application/json',
     "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE1MWRhYzYzOGNmYWM4ODM1NzY2ZWMzIn0sImlhdCI6MTYzMjg4MzY1NX0.CmI-2QV_8i-BOGK46aA-BG27XFBtbOc723RCoeplvNA"
   },
 });
 const json = await response.json();
  console.log(json);
  setNotes(json);
   
 }
  //Add a Note 
  const addNote = async (title, description, tag) => {
     //API call
   const response = await fetch(`${host}/api/notes/addnote`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE1MWRhYzYzOGNmYWM4ODM1NzY2ZWMzIn0sImlhdCI6MTYzMjg4MzY1NX0.CmI-2QV_8i-BOGK46aA-BG27XFBtbOc723RCoeplvNA"
    },
    body: JSON.stringify({title, description, tag})
  });
  const note = await response.json();
  setNotes(notes.concat(note));
  }
  //Delete a Note
  const deleteNote = async (id) => {
    //API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE1MWRhYzYzOGNmYWM4ODM1NzY2ZWMzIn0sImlhdCI6MTYzMjg4MzY1NX0.CmI-2QV_8i-BOGK46aA-BG27XFBtbOc723RCoeplvNA"
      },
    });
    const json = response.json();
    console.log('delete note with id' + id);
    const newNotes = notes.filter((note) => { return note._id !== id });
    setNotes(newNotes)
  }
  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE1MWRhYzYzOGNmYWM4ODM1NzY2ZWMzIn0sImlhdCI6MTYzMjg4MzY1NX0.CmI-2QV_8i-BOGK46aA-BG27XFBtbOc723RCoeplvNA"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = await response.json();

    let newNotes = JSON.parse(JSON.stringify(notes))
    //Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag
        break;
      }
    }
    setNotes(newNotes);  }


  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;