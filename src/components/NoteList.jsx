import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { NoteItem } from "./NoteItem";
import AddNote from "./AddNote";
import SearchNote from "./SearchNote";

export const NoteList = () => {
    const { notes } = useContext(AppContext);
    const [search, setSearch] = useState("")

    return (


        <div className=" note-list">
            <SearchNote setSearch={setSearch} />
            <div className="row">
                {notes.filter((note) => note.text.toLowerCase().includes(search.toLowerCase())).map((note) => {
                    return (
                        <div className="col-md-3">
                            <NoteItem note={note} />
                        </div>
                    );
                })}
                <div className="col-md-3">

                    <AddNote />
                </div>
            </div>
        </div>

    );
};
