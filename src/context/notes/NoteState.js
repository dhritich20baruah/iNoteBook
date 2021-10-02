import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) =>{
    const notesInitial = [
        {
          "_id": "615411390eff14c30d99ba0b",
          "user": "6151dac638cfac8835766ec3",
          "title": "My title",
          "description": "Rein your mind, harness your thoughts; pump up courage in your heart. The Sun's down and the night has howled, now it's your turn to raise above the clouds",
          "tag": "Personal",
          "date": "2021-09-29T07:09:45.830Z",
          "__v": 0
        },
        {
          "_id": "615411a50eff14c30d99ba0e",
          "user": "6151dac638cfac8835766ec3",
          "title": "My title",
          "description": "Rein your mind, harness your thoughts; pump up courage in your heart. The Sun's down and the night has howled, now it's your turn to raise above the clouds",
          "tag": "Personal",
          "date": "2021-09-29T07:11:33.158Z",
          "__v": 0
        },
        {
          "_id": "615411a60eff14c30d99ba10",
          "user": "6151dac638cfac8835766ec3",
          "title": "My title",
          "description": "Rein your mind, harness your thoughts; pump up courage in your heart. The Sun's down and the night has howled, now it's your turn to raise above the clouds",
          "tag": "Personal",
          "date": "2021-09-29T07:11:34.068Z",
          "__v": 0
        },
        {
          "_id": "615411a60eff14c30d99ba10",
          "user": "6151dac638cfac8835766ec3",
          "title": "My title",
          "description": "Rein your mind, harness your thoughts; pump up courage in your heart. The Sun's down and the night has howled, now it's your turn to raise above the clouds",
          "tag": "Personal",
          "date": "2021-09-29T07:11:34.068Z",
          "__v": 0
        },
        {
          "_id": "615411a60eff14c30d99ba10",
          "user": "6151dac638cfac8835766ec3",
          "title": "My title",
          "description": "Rein your mind, harness your thoughts; pump up courage in your heart. The Sun's down and the night has howled, now it's your turn to raise above the clouds",
          "tag": "Personal",
          "date": "2021-09-29T07:11:34.068Z",
          "__v": 0
        },
        {
          "_id": "615411a60eff14c30d99ba10",
          "user": "6151dac638cfac8835766ec3",
          "title": "My title",
          "description": "Rein your mind, harness your thoughts; pump up courage in your heart. The Sun's down and the night has howled, now it's your turn to raise above the clouds",
          "tag": "Personal",
          "date": "2021-09-29T07:11:34.068Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(notesInitial)

   
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;