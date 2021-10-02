import React, {useContext} from 'react'
import NoteContext from '../context/notes/NoteContext';
import Addnote from './Addnote';
import Noteitem from './Noteitem';

const Notes = () => {
    const context = useContext(NoteContext);
    const {notes} = context;
    return (
        <>
        <Addnote/>
        <div className="row my-3">
            <h2>Your notes</h2>
            {notes.map((note) => {
                return <Noteitem key={note._id} note={note}/>//passing a prop
            })}
        </div>
        </>
    )
}

export default Notes
