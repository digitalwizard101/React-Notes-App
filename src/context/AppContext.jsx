import { nanoid } from "nanoid";
import React, { createContext, useReducer } from "react";

const currentDate = new Date();

const options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hours: "2-digit",
    minutes: "2-digit",
    seconds: "2-digits",
    hour12: true,
};

export const dateAndTimeString = currentDate.toLocaleTimeString(undefined, options)

const initialState = {
    notes: [
        { id: nanoid(), text: "This is note 1", date: dateAndTimeString },
        { id: nanoid(), text: "This is note 2", date: dateAndTimeString },
        { id: nanoid(), text: "This is note 3", date: dateAndTimeString },
        { id: nanoid(), text: "This is note 4", date: dateAndTimeString },
        { id: nanoid(), text: "This is note 5", date: dateAndTimeString },
        { id: nanoid(), text: "This is note 6", date: dateAndTimeString },
        { id: nanoid(), text: "This is note 7", date: dateAndTimeString },
        { id: nanoid(), text: "This is note 8", date: dateAndTimeString },
    ],
};



export const AppContext = createContext()



const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            const newNotes = [...state.notes, action.payload]
            return {
                ...state, notes: newNotes
            };
        case "DELETE_NOTE":
            const filteredNotes = [...state.notes]
            const index = state.notes.findIndex((note) => note.id === action.payload)

            filteredNotes.splice(index, 1)
            return {
                ...state, notes: filteredNotes
            }


        default:
            break;
    }

}


export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    return (
        <AppContext.Provider value={{ notes: state.notes, dispatch, date: dateAndTimeString }}>
            {
                props.children
            }
        </AppContext.Provider>
    )

}