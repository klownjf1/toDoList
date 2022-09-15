import './App.css';
import ToDoListForm from "./Components/toDoForm";
import React, {useState} from "react";

function App() {

    const state = [
        {id: 0, case: 'ыы', editMode: false}
    ]

    const [deletedItems, setDeletedItems] = useState([])
    const [doings, setDoings] = useState(state)
    const [currentItem, setCurrentItem] = useState(null)
    const [select, setSelect] = useState('current')

    const deletedItem = deletedItems.map(item =>
        <div key={item.id} className={'form__items'}>
            <span className = 'form__items__case'>
                {item.case}
            </span>
        </div>
    )


  return (
    <div className="App">
        <ToDoListForm
            setSelect = {setSelect}
            select = {select}
            setDoings={setDoings}
            doings={doings}
            setCurrentItem={setCurrentItem}
            currentItem={currentItem}
            setDeletedItems={setDeletedItems}
            deletedItem={deletedItem}/>
    </div>
  );
}

export default App;
