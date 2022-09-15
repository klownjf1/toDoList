import React, {useState} from 'react';
import trash from "../assets/trash.png";
import '../App.css'


const ToDoList = ({doings, setDoings, setCurrentItem, currentItem, select, deletedItem,  setDeletedItems}) => {

    const handleFocus = (e) => e.target.select()


    const cleanCase = (id) => {
        setDoings(prevState => [...prevState.filter(item => item.id !== id)])
        setDeletedItems(prevState => [...prevState, ...doings.filter(item => item.id === id)])
    }

    const cleanList = () => {
        setDeletedItems(prevState => [...prevState, ...doings])
        setDoings([])
    }

    const activateEditMode = (id) => {
        setDoings(prevState =>
            prevState.map(item =>
                item.id === id
                    ? {...item, editMode: true}
                    : item
            )
        )
    }

    const deActivateEditMode = (id) => {
        setDoings(prevState =>
            prevState.map(item =>
                item.id === id
                    ? {...item, editMode: false}
                    : item
            )
        )
    }

    const onCaseChange = (id, e) => {
        let text = e.currentTarget.value

        setDoings(prevState =>
            prevState.map(item =>
                id === item.id
                    ? {...item, case: text}
                    : item
            )
        )
    }

    const dragStartHandler = (e, item) => {
        setCurrentItem(item)
    }

    const dragEndHandler = (e) => {
        e.target.style.background = 'white'

    }

    const dragOverHandler = (e) => {
        e.preventDefault()
    }

    const dropHandler = (e, item) => {
        e.preventDefault()
        setDoings(doings.map(d => {
            if (d.id === item.id) {
                return {...d, case: currentItem.case}
            }
            if (d.id === currentItem.id) {
                return {...d, case: item.case}
            }
            return d
        }))
    }

    let cases = doings.map(item =>
        <div key={item.id} className={'form__items'}>
            {
                (!item.editMode) ?
                    <span
                        onDragStart={(e) => dragStartHandler(e, item)}
                        onDragEnd={(e) => dragEndHandler(e)}
                        onDragOver={(e) => dragOverHandler(e)}
                        onDrop={(e) => dropHandler(e, item)}
                        draggable={true}
                        onDoubleClick={() => activateEditMode(item.id)}
                        className = 'form__items__case'
                    >

                    {item.case} </span> :
                    <input
                        value={item.case}
                        onChange={(e) => onCaseChange(item.id, e)}
                        onBlur={() => deActivateEditMode(item.id)}
                        onFocus={handleFocus}
                        autoFocus={true}
                        className= 'form__items__change-field'
                    />
            }
            <button onClick={() => cleanCase(item.id)} className= 'form__clean-btn'><img src={trash} alt=""/></button>
        </div>
    )
    return (
        <div>
            <div className = 'form__list'>
                {select === 'current' ? <div className='form__cases'> {cases} </div > : <div className='form__cases'> {deletedItem} </div>}
                <div className = 'form__buttons'>
                    <button onClick={cleanList} className='form__clean-list-btn' disabled={select === 'deleted' || doings.length === 0}>Clean</button>
                </div>
            </div>
        </div>
    );
};

export default ToDoList;