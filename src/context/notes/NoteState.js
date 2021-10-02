import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) =>{
    const notesInitial = [
        {
          "_id": "615411390eff14c30md99ba0b",
          "user": "6151dac638cfac8835766ec3",
          "title": "My title",
          "description": "Rein your mind, harness your thoughts; pump up courage in your heart. The Sun's down and the night has howled, now it's your turn to raise above the clouds",
          "tag": "Personal",
          "date": "2021-09-29T07:09:45.830Z",
          "__v": 0
        },
        {
          "_id": "615411a50eff14c30d9g9ba0e",
          "user": "6151dac638cfac8835766ec3",
          "title": "My title",
          "description": "Rein your mind, harness your thoughts; pump up courage in your heart. The Sun's down and the night has howled, now it's your turn to raise above the clouds",
          "tag": "Personal",
          "date": "2021-09-29T07:11:33.158Z",
          "__v": 0
        },
        {
          "_id": "615411a60effs14c30dd99ba10",
          "user": "6151dac638cfac8835766ec3",
          "title": "My title",
          "description": "Rein your mind, harness your thoughts; pump up courage in your heart. The Sun's down and the night has howled, now it's your turn to raise above the clouds",
          "tag": "Personal",
          "date": "2021-09-29T07:11:34.068Z",
          "__v": 0
        },
        {
          "_id": "615411a60eff14c30d99vba10",
          "user": "6151dac638cfac8835766ec3",
          "title": "My title",
          "description": "Rein your mind, harness your thoughts; pump up courage in your heart. The Sun's down and the night has howled, now it's your turn to raise above the clouds",
          "tag": "Personal",
          "date": "2021-09-29T07:11:34.068Z",
          "__v": 0
        },
        {
          "_id": "615411a60eff14c30d9d9ba10",
          "user": "6151dac638cfac8835766ec3",
          "title": "My title",
          "description": "Rein your mind, harness your thoughts; pump up courage in your heart. The Sun's down and the night has howled, now it's your turn to raise above the clouds",
          "tag": "Personal",
          "date": "2021-09-29T07:11:34.068Z",
          "__v": 0
        },
        {
          "_id": "615411a60eff14c30d99bea10",
          "user": "6151dac638cfac8835766ec3",
          "title": "My title",
          "description": "Rein your mind, harness your thoughts; pump up courage in your heart. The Sun's down and the night has howled, now it's your turn to raise above the clouds",
          "tag": "Personal",
          "date": "2021-09-29T07:11:34.068Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(notesInitial)
      //Add a Note
      console.log('Adding a new note')
      const addNote = (title, description, tag) =>{
      const  note = {
          "_id": "615411a60eff14c3fr0d99bea10",
          "user": "6151dac638cfac8835766ec3",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2021-09-29T07:11:34.068Z",
          "__v": 0
        }
        setNotes(notes.concat(note))
      }
      //Delete a Note
      const deleteNote = (id) =>{
        console.log('delete note with id'+ id);
        const newNotes = notes.filter((note)=>{return note._id!==id});
        setNotes(newNotes)
      }
      //Edit a Note
      const editNote = (_id) =>{
        
      }
   
    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;