import React from "react";
import '../App.css'
import ToDoList from "./toDoList";
import InputField from "./inputField";
import SelectField from "./selectField";

export const ToDoListForm = ({ setSelect, select, setDoings, doings, setCurrentItem, currentItem, setDeletedItems, deletedItem }) => {
    return (

        <div className='form'>

            <h1>To do list</h1>
            <SelectField
                setSelect={setSelect}
                select={select}
                deletedItems={deletedItem}/>

            <InputField
                select={select}
                setDoings={setDoings}/>

            <ToDoList
                doings={doings}
                setCurrentItem={setCurrentItem}
                currentItem={currentItem}
                select={select}
                deletedItem={deletedItem}
                setDoings={setDoings}
                setDeletedItems={setDeletedItems}/>

        </div>
    )
}

export default ToDoListForm