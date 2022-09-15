import React from 'react';
import '../App.css'

const SelectField = ({setSelect, select, deletedItems}) => {

    const onChangeSelect = (e) => {setSelect(e.target.value)}

    return (
        <div>
            <select name="" id="" value = {select} onChange={onChangeSelect} className= 'form__select'>
                <option value= 'current'>Current</option>
                <option value= 'deleted' disabled={deletedItems.length === 0}>Deleted tasks</option>
            </select>
        </div>
    );
};

export default SelectField;